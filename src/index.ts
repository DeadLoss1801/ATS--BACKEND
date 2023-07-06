import express, { Router } from "express";
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router";

const app = express();
dotenv.config();

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  return res
    .status(200)
    .send({
      message: "Jo",
    })
    .end();
});

const server = http.createServer(app);

server.listen(8000, () => {
  console.log("http://localhost:8000/");
});

const MONGO_URL = `${process.env.DATABASE_URL}`;
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
