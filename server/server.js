import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { db } from "./config/db.js";

dotenv.config();

db();

const PORT = process.env.PORT;

const app = express();

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
