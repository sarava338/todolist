import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import listners from "./listners";

const app = new Elysia({
  serve: { port: Number(process.env.PORT), hostname: process.env.HOST },
})
  // .use(html())
  .use(listners)
  .get("/", () => "hello world")
  .listen(Number(process.env.PORT), ({ hostname, port }) => {
    console.log(
      `server running at ${process.env.PROTOCOL}://${hostname}:${port}`
    );
  });

