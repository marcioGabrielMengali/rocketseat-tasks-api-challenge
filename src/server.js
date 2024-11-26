import http from "node:http";
import { routes } from "./routes/routes.js";

const PORT = process.env.PORT ?? 3333;

const server = http.createServer((req, res) => {
  const { url, method } = req;
  const route = routes.find(
    (route) => route.url === url && route.method === method
  );
  if (route) {
    return route.handler(req, res);
  }
  return res.writeHead(404).end("Page not found");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
