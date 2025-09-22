const express = require("express");
const router = express.Router();
const movementController = require("../controllers/movementController");
const { noProduct } = require("../middleware/noProducts");

router.get("/", movementController.getAllMovement);
router.get("/stock/:id", noProduct, movementController.getStock);
router.get("/:id", noProduct, movementController.getMovementById);
router.post("/", movementController.createMovement);

module.exports = router;
