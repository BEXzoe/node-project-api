const movementService = require("../services/movementService");

async function getAllMovement(req, res) {
  const result = await movementService.getAllMovement();
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result.message);
  }
}
async function getMovementById(req, res) {
  const { id } = req.params;
  const result = await movementService.getMovementById(id);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json(result.message);
  }
}

async function createMovement(req, res) {
  const postMovement = req.body;
  const newMovement = await movementService.createMovement(postMovement);
  if (newMovement.success) {
    res.status(201).json(newMovement);
  } else {
    res.status(500).json(newMovement.message);
  }
}

async function getStock(req, res) {
  const { id } = req.params;
  console.log(id);
  const quantityStock = await movementService.getStock(id);
  if (quantityStock.success) {
    res.status(200).json(quantityStock);
  } else {
    res.status(500).json(quantityStock);
  }
}

module.exports = { getAllMovement, createMovement, getMovementById, getStock };
