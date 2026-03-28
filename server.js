import http from "node:http";
import { getDataFromDB } from "./database/db.js";

const PORT = 8000;

const server = http.createServer(async (req, res) => {
  if (req.url === "/api" && req.method === "GET") {
    const destinations = await getDataFromDB();
    res.end(JSON.stringify(destinations));
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});