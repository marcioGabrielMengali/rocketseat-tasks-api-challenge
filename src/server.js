import http from "node:http";

const PORT = process.env.PORT ?? 3333;

const server = http.createServer((req, res) => {
  res.end("Hello");
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
