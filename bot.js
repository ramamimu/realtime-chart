/* eslint-disable no-undef */
const mysql = require("mysql");
const config = require("./config/config.json");

const conn = mysql.createConnection({
  host: config.mysql.host,
  user: config.mysql.user,
  password: config.mysql.password,
  database: config.mysql.database,
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

setInterval(() => {
  const data = {
    time: new Date().getTime(),
    type: Math.round(Math.random() * 1),
    voltage: 10 + Math.floor(Math.random() * 90),
    frequency: 10 + Math.floor(Math.random() * 90),
    current: 10 + Math.floor(Math.random() * 90),
    power: 10 + Math.floor(Math.random() * 90),
    powerF: 10 + Math.floor(Math.random() * 90),
  };

  console.log(data.type);
  console.log(data.time);

  const query = `INSERT INTO moduldb (time, type, voltage, frequency, current, power, powerF) VALUES ('${data.time}', ${data.type}, ${data.voltage}, ${data.frequency} ,${data.current}, ${data.power}, ${data.powerF})`;

  conn.query(query, function (err) {
    if (err) {
      throw err;
    } else {
      console.log("Data inserted");
    }
  });
}, 5000);
