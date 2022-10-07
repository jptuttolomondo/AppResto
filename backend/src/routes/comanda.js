const router = require("express").Router();
const comandas = require("./controllers/comanda");
router.route("/").get(comandas.get);
router.route("/:id").get(comandas.getComandaPorId);
router.post("/", comandas.post);
router.delete("/:id", comandas.delete);
module.exports = router;
