import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import myUserRoute from "./routes/MyUserRoutes";

mongoose
  .connect(process.env.MONGO as string)
  .then(() => console.log("Connected to database."));

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/my/user", myUserRoute);

app.listen(7000, () => {
  console.log("Server started on localhost:7000");
});

38;
