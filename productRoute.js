const productController = require("../controllers/productController");
const { noProduct } = require("../middleware/noProducts");
const express = require("express");
const router = express.Router();

router.get("/", productController.getAllProduct);
router.get("/:id", noProduct, productController.getProductById);
router.post("/", productController.postAllProduct);
router.put("/:id", noProduct, productController.updateProduct);
router.delete("/:id", noProduct, productController.deleteProduct);
module.exports = router;
