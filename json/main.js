const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("dbb.json");

const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use(
  jsonServer.rewriter({
    "/*": "/$1",
  })
);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
