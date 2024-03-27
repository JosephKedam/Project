const express = require("express");

const mongoose = require("mongoose");

const app = express();
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/crud");

const UserSchema = new mongoose.Schema({
  uname: String,
  psw: String,
});

const UserModel = mongoose.model("users", UserSchema);

app.post("/registerUser", async (req, res) => {
  console.log(`postMethod`, req.body);
  const users = new UserModel({
    uname: req.body.uname,
    psw: req.body.psw,
  });
  console.log(`register`, users);
  await users.save();
  res.redirect("/home");
});

app.get(`/`, (req, res) => {
  console.log(`get Method`, req.body);
  UserModel.find({})
    .then(function (users) {
      res.json(users);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.listen(3001, () => {
  console.log("Server is Running");
});
