require("dotenv").config();
const { Router } = require("express");
const router = Router();

const users = require("./user");
const products = require("./producto");
const comandas = require("./comanda");
const categories= require("./category");
const page404 = require("./404");

router.use("/users", users);
router.use("/products", products);
router.use("/comandas", comandas);
router.use("/categories",categories)
router.use("*", page404);

module.exports = router;
