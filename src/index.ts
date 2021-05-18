var path = require("path");
var cookieParser = require("cookie-parser");
import express from "express";
import MongoConnection from "./db/MongoConnect";
import logger from "morgan";

// Importing Routes
import KanasRoute from "./routes/kanas"
import indexRouter from "./routes/index"
import usersRouter from "./routes/users"

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 3000;

// Declaring Routes
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/api", KanasRoute)

app.listen(port, async () => {
  try {
    await MongoConnection.connectDB();
    console.log("Server Running on port " + port);
  } catch (err) {
    console.error(err);
  }
});
