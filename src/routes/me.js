const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");
router.get("/courses", meController.index);
router.get("/course/:id/edit", meController.show);
router.put("/course/:id", meController.update);
router.delete("/course/:id", meController.destroy);
module.exports = router;
