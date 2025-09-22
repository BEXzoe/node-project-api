const productRepository = require("../repositories/productRepository");

async function noProduct(req, res, next) {
  const { id } = req.params;
  const checkId = await productRepository.getProductById(id);
  if (checkId.length === 0) {
    res.status(400).json({ message: "The id does not exist" });
  }
  next();
}

module.exports = { noProduct };
