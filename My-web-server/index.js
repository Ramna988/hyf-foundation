import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.get("/users", (request, response) => {
  response.send("Here is the list of users!");
});

app.get("/tasks", (request, response) => {
  response.send("Here is the list of all tasks!");
});

app.get("/about", (request, response) => {
  response.send("This is my first Express web server!");
});

app.get("/user-count", (request, response) => {
  response.json({ total: 5 });
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
