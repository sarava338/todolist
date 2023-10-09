import { Elysia } from "elysia";

const listners = new Elysia();

export default listners.onRequest(({ request }) => {
  const { method, url } = request;
  console.log(
    `${new Date().toISOString()} --REQ-- [METHOD] ${method} [PATH] ${
      url.split("8080")[1]
    }`
  );
});
// .onResponse((response) => {
//   console.log(
//     `${new Date().toISOString()} --RES-- [STATUS] ${
//       response.set.headers.status
//     }`
//   );
// });
