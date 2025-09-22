const productRepository = require("../repositories/productRepository");

async function getAllProduct() {
  try {
    const product = await productRepository.getAllProduct();
    if (product.length === 0) {
      return { message: "The database is empty" };
    }
    return {
      success: true,
      data: product,
      message: "Product's list",
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred in the database.",
    };
  }
}
async function getProductById(id) {
  try {
    const productById = await productRepository.getProductById(id);
    return {
      success: true,
      data: productById,
      message: `Product's id: ${id}`,
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while querying the database.",
    };
  }
}

async function postAllProduct(id, description, valor) {
  try {
    const newProduct = await productRepository.postAllProduct(
      id,
      description,
      valor
    );
    return {
      success: true,
      data: newProduct,
      message: "The product was created successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "There was an error creating the new product.",
    };
  }
}

async function updateProduct(id, description, valor) {
  try {
    const putProduct = await productRepository.updateProduct(
      id,
      description,
      valor
    );
    return {
      success: true,
      data: putProduct,
      message: "The product was updated successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "There was an error updating the product.",
    };
  }
}

async function deleteProduct(id) {
  try {
    const productDeleted = await productRepository.deleteProduct(id);
    return {
      success: true,
      data: productDeleted,
      message: "The product was deleted successfully.",
    };
  } catch (error) {
    return {
      success: false,
      message: "There was an error deleting the product.",
    };
  }
}
module.exports = {
  getAllProduct,
  postAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
