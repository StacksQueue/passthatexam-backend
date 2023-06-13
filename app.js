const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();

/**
 * routes import
 */
const CategoryRoute = require("./routes/category");
const QuestionRoute = require("./routes/question");

/**
 * middlewares
 */
app.use(express.json());
app.use(cors());

/**
 * routes
 */
app.use("/api/category", CategoryRoute);
app.use("/api/question", QuestionRoute);

try {
  mongoose.set('strictQuery', true);
  mongoose.connect(process.env.DATABASE);
  console.log("database connected");
} catch (err) {
  console.log(err);
}

app.listen(3000, (err) => {
  if (err) console.log("error");
  else console.log("listening to port 3000");
});
