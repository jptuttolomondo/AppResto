const router = require("express").Router();
const mesas = require("./controllers/mesa");
router.route("/").get(mesas.get);
//router.post("/", mesas.post);
//router.delete("/:name", mesas.delete);

module.exports = router;