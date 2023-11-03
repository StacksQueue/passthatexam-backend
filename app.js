const express = require("express");
const mongoose = require("mongoose");
const compression = require("compression");
const cors = require("cors");
const app = express();
const path = require("path");
require("dotenv").config();

/**
 * routes import
 */
const CategoryRoute = require("./routes/category");
const QuestionRoute = require("./routes/question");
const ProgramRoute = require("./routes/program");
const ReportRoute = require("./routes/report");

/**
 * middlewares
 */
app.use(express.json());
app.use(cors());
app.use(compression());

/**
 * routes
 */
app.use("/api/category", CategoryRoute);
app.use("/api/question", QuestionRoute);
app.use("/api/program", ProgramRoute);
app.use("/api/report", ReportRoute);

try {
  mongoose.set("strictQuery", true);
  mongoose.connect(process.env.DATABASE);
  console.log("database connected");
} catch (err) {
  console.log(err);
}

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send("User-agent: *\nDisallow:");
});

app.get("/ads.txt", (req, res) => {
  res.type("text/plain");
  res.send("google.com, pub-6202000492749464, DIRECT, f08c47fec0942fa0");
});

app.use(express.static(__dirname + "/dist/pass-that-exam"));
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/dist/pass-that-exam/index.html"));
});

// app.get('/', (req, res) => {
//   // res.sendFile(path.join(__dirname + '/dist/index.html'));
//   res.json({ data: null, message: "success", success: true });
// })

app.listen(3000, (err) => {
  if (err) console.log("error");
  else console.log("listening to port 3000");
});
