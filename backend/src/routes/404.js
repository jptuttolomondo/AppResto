const router = require("express").Router();
const page404 = require("./controllers/404");

router.route("/").get(page404.get);
module.exports = router;
