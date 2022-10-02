const router = require("express").Router();
const categories = require("./controllers/category");
router.route("/").get(categories.get);
router.post("/", categories.post);
router.delete("/:category_name", categories.delete);
module.exports = router;
