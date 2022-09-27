const router = require("express").Router();
const products = require("./controllers/producto");
router.route("/").get(products.get);
router.post("/", products.post);
router.delete("/:name", products.delete);

module.exports = router;
