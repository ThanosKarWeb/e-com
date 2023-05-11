const express = require("express");
const { validationResult } = require("express-validator");
const ProductsRepo = require("../../repositories/repository");
const productsNewTemplate = require("../../views/admin/products/new");
const { requireTitle, requirePrice } = require("./validators");

const router = express.Router();

//List products
router.get("/admin/products", (req, res) => {});

//Display form to add products
router.get("/admin/products/new", (req, res) => {
  res.send(productsNewTemplate({}));
});

//User submits info from the form
router.post("/admin/products/new", [requireTitle, requirePrice], (req, res) => {
  const errors = validationResult(req);
  console.log(errors);
  res.send("Submitted");
});

module.exports = router;
