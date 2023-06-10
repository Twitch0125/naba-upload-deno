import type { HtmlEscapedString } from "https://deno.land/x/hono@v3.2.4/utils/html.ts";

interface PageProps {
  head?: HtmlEscapedString;
  children?: HtmlEscapedString;
}
export const BasePage = (props: PageProps = {}) => (
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="stylesheet" href="/public/uno.css" />
      <script src="https://unpkg.com/htmx.org@1.9.2"></script>
      <script
        defer
        src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"
      ></script>
      {props.head}
    </head>
    <body>
      <main>{props.children}</main>
    </body>
  </html>
);
