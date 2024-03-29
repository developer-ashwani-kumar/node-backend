// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./.env" });

const port = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(port || 8000, () => {
      console.log(`Server is runnig at port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection faild !! ", error);
  });

/*
import express from "express";
import { DB_NAME } from "./constants";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("Error", (error) => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
    throw error;
  }
})();

*/
