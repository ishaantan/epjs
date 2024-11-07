const express = require("express");
const router = express.Router();

const meController = require("../app/controllers/MeController");
// router.get("/courses/edit", meController.show);
router.get("/courses", meController.index);
module.exports = router;
