const express = require("express");
const product = express.Router();
const mysql = require("mysql");
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Welcome123",
  database: "estore",
  port: 3306,
  multipleStatements: true,
});

product.get("/", (req, res) => {
  let categoryData;
  pool.query("select * from categories", (err, categories) => {
    if (err) {
      categoryData = err;
      res.status(422).send(categoryData);
    } else {
      categoryData = categories;
      res.status(200).send(categoryData);
    }
  });
});

product.get("/getProducts", (req, res) => {
  let productData;
  pool.query("select * from products", (err, rows) => {
    if(err){
      res.status(422).send(err);
    }
    else{
        productData = rows;
        res.status(200).send(productData);
    }
  });
});

module.exports = product;
