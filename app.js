const express = require("express");
const cors = require("cors");
const app = express();

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

app.listen(3000, (err) => {
  if (err) console.log("error");
  else console.log("listening to port 3000");
});
