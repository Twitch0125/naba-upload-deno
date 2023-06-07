import { load } from "dotenv";

await load({ export: true });

if (!Deno.env.get("AUTH_PASSWORD")) {
  console.log("Please set AUTH_PASSWORD environment variable");
  Deno.exit();
}
