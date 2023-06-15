import "./env.ts";
import { Hono, RegExpRouter } from "hono";
import { basicAuth, compress, serveStatic } from "hono/middleware";
import { ensureDir, ensureFile } from "fs";
import { Untar } from "archive";
import { copy, readerFromStreamReader } from "streams";
import { UploadPage } from "templates/upload.tsx";
import { render } from "preact-render-to-string";
import { TestPage } from "templates/test.tsx";

const app = new Hono({ router: new RegExpRouter() });
app.get("/html", (ctx) => ctx.html(render(TestPage())));
app.get(
  "/upload",
  basicAuth({ username: "admin", password: Deno.env.get("AUTH_PASSWORD") }),
  (ctx) => {
    return ctx.html(render(UploadPage()));
  },
);
app.post(
  "/upload",
  basicAuth({ username: "admin", password: Deno.env.get("AUTH_PASSWORD") }),
  async (ctx) => {
    const body = await ctx.req.raw.formData();
    /** @type {File} */
    const file = body.get("file");
    if (!file) {
      return ctx.html(render(UploadPage({ message: "No file uploaded" })), 400);
    }
    await ensureDir(Deno.cwd() + "/uploads");
    const fsFile = await Deno.create(Deno.cwd() + "/uploads/report.tar.gz");
    await file.stream().pipeTo(fsFile.writable);

    const uploadedFile = await Deno.open(
      Deno.cwd() + "/uploads/report.tar.gz",
      { read: true },
    );

    await ensureDir(Deno.cwd() + "/extracted");
    const gzipReader = uploadedFile.readable.pipeThrough(
      new DecompressionStream("gzip"),
    )
      .getReader();

    const untar = new Untar(readerFromStreamReader(gzipReader));
    for await (const entry of untar) {
      if (entry.type === "file") {
        await ensureFile(`${Deno.cwd()}/extracted/${entry.fileName}`);
        const writer = await Deno.create(
          `${Deno.cwd()}/extracted/${entry.fileName}`,
        );
        await copy(entry, writer);
        writer.close();
      }
    }
    return ctx.html(
      render(UploadPage({ message: "Upload successful!" })),
    );
  },
);
app.get(
  "/public/*",
  async (ctx, next) => {
    ctx.header(
      "Cache-Control",
      "max-age=86400, stale-while-revalidate=172800, must-revalidate, immutable",
    );
    await next();
  },
  serveStatic({
    root: "./public",
    rewriteRequestPath: (path) => path.replace(/^\/public/, ""),
  }),
);
app.get("/*", compress(), async (ctx, next) => {
  if (ctx.req.url.endsWith(".html")) {
    ctx.header("Cache-Control", "no-cache");
  } else {
    ctx.header(
      "Cache-Control",
      "max-age=86400, stale-while-revalidate=172800, must-revalidate, immutable, must-understand",
    );
    await next();
  }
}, serveStatic({ root: "./extracted/news/html" }));

await Deno.serve({ port: 8000 }, app.fetch);
