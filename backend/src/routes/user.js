const router = require("express").Router();
const users = require("./controllers/user");
router.route("/").get(users.get);
router.route("/:name").get(users.get);
router.post("/", users.post);
router.delete("/:name", users.delete);

module.exports = router;
