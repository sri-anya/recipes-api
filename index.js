// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 4000;

// server.use(middlewares);
// server.use(router);

// server.listen(port);
const jsonServer = require("json-server");
const path = require("path");
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json")); // Adjust the path to your JSON file
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors, and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH requests, use body-parser
server.use(jsonServer.bodyParser);

// Use default router
server.use(router);

// Start the server
const PORT = process.env.PORT || 4000; // You can set your preferred port
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
