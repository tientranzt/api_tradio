var express = require("express");
var router = express.Router();
const mysql = require("mysql2");
const { route } = require("./users");
const authLoginController = require("../controller/aulogincontroller");
const db = require("../db/db");

// get, post, put, patch, delete, options
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   database: 'tribio_store'
// });

router.get("/", function (req, res, next) {
  res.json({ title: "xin chao", test: "test string" });
});

// get login
router.get("/login", function (req, res, next) {
  db.query("SELECT * FROM `users`", function (err, results, fields) {
    console.log(results);
    // console.log(fields);
    // results.forEach(element => {
    //   console.log(element.username)
    // });
    res.json(results);
  });
});

// api test
router.get("/test", authLoginController.testlogin);

router.post("/test", authLoginController.testLoginPost);

//  post login
router.post("/login", function (req, res) {
  console.log(req.body);

  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    console.log(results);
  });

  res.json({ isOk: true, message: "Authentication OK", code: 200 });
});

// get register
router.get("/register", function (req, res, next) {
  res.json({ title: "get register route" });
});

// post register
router.post("/register", function (req, res) {
  res.json({ title: "post register route" });
});

module.exports = router;
