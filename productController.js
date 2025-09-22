const productService = require("../services/productService");

async function getAllProduct(req, res) {
  const result = await productService.getAllProduct();
  return res.status(200).json(result);
}

async function getProductById(req, res) {
  const id = req.params.id;
  const result = await productService.getProductById(id);
  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(500).json(result.message);
  }
}

async function postAllProduct(req, res) {
  const { id, description, valor } = req.body;
  const result = await productService.postAllProduct(id, description, valor);
  if (result.success) {
    return res.status(201).json(result);
  } else {
    return res.status(500).json(result.message);
  }
}

async function updateProduct(req, res) {
  const { id } = req.params;
  const { description, valor } = req.body;
  const result = await productService.updateProduct(id, description, valor);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json(result.message);
  }
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  const result = await productService.deleteProduct(id);
  if (result.success) {
    return res.status(200).json(result);
  } else {
    return res.status(500).json(result.message);
  }
}
module.exports = {
  getAllProduct,
  postAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
