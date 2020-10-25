import express from "express";
import * as bodyParser from "body-parser";

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

// ルーティング

export default app;
