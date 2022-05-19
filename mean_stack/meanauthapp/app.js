const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("./config/database");

//db connection
mongoose.connect(config.database);
mongoose.connection.on("connected", () => {
  console.log("Connected to database " + config.database);
});
mongoose.connection.on("error", (err) => {
  console.log("Database error " + err);
});

const app = express();

const users = require("./routes/users");

const port = 3000;

app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.json());
app.use(session({ secret: "mysecret" }));
//passport middleware
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

app.use("/users", users);

app.get("/", (req, res) => {
  res.send("Invalid Endpoint");
});

app.listen(port, () => {
  console.log("Server started on port " + port);
});
