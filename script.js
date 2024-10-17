import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
app.get("/teams", (req, res) => {
    res.sendFile(__dirname + "/teams.html");
  });



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
  