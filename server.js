import http from "node:http";
import { getDataFromDB } from "./database/db.js";
import { error } from "node:console";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    const destinations = await getDataFromDB();
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;
    res.end(JSON.stringify(destinations));
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({error: "Not found", message: "The requested route does not exist."}));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});