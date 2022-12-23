/* eslint-disable no-undef */
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const config = require("../config/config.json");

const app = express();

app.use(cors());
app.use(express.json());

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
});

let conn = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  conn.query(`SELECT * FROM ${config.mysql.table}`, function (err, result) {
    if (err) {
      res.send(err);
      throw err;
    }
    try {
      console.log("get data success");
      res.send(JSON.stringify(result));
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  });
});
