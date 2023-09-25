import { Elysia } from "elysia";

new Elysia().get("/", () => "hello world").listen(Number(process.env.PORT));

console.log(
  `server running on ${process.env.PROTOCOL}://${process.env.HOST}:${process.env.PORT}`
);
