const express = require("express");
const cors = require("cors");

const userRouter = require('./routes/user.router');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// api users route
app.use("/api/users", userRouter);

// welcome server
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/./views/index.html");
});

//route error
app.use((req, res, next) => {
  res.sendFile(__dirname + "/./views/error.html");
});

// Server error
app.use((err, req, res, next) => {
  res.status(500).json({ message: "Server not found" });
});

module.exports = app;
