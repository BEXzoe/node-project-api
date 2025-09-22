const movementRepository = require("../repositories/movementRepository");
const productById = require("../repositories/productRepository");
async function getAllMovement() {
  try {
    const movement = await movementRepository.getAllMovement();
    if (movement.length === 0) {
      return { message: "The database is empty" };
    }
    return {
      success: true,
      data: movement,
      message: "Movement list",
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred in the database.",
    };
  }
}

async function getMovementById(id) {
  try {
    const movementById = await movementRepository.getMovementById(id);
    console.log(movementById);
    return {
      success: true,
      data: movementById,
      message: `Movement with id:${id}`,
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred in the database.",
    };
  }
}
async function createMovement(postMovement) {
  try {
    let { id_product, description_movement, quantity } = postMovement;

    if (
      description_movement === "sale" ||
      description_movement === "transfer"
    ) {
      quantity = -Math.abs(quantity);
    }
    const stockAvailable = await movementRepository.getStock(id_product);
    const stock = parseInt(stockAvailable.stock);

    if (stock + quantity < 0) {
      return {
        success: false,
        message: "Insufficient stock to complete the transaction.",
      };
    }

    const newMovement = await movementRepository.createMovement(
      id_product,
      description_movement,
      quantity
    );

    switch (description_movement) {
      case "transfer":
        return {
          success: true,
          message: "The transfer was completed successfully.",
          data: newMovement,
        };

      case "purchase":
        return {
          success: true,
          message: "The purchase was successful!",
          data: newMovement,
        };

      case "sale":
        const [productRepository] = await productById.getProductById(
          id_product
        );
        return {
          success: true,
          message: "The sale was completed successfully.",
          balance: productRepository.valor * -quantity,
        };

      default:
        return {
          success: false,
          message: "Invalid movement type.",
        };
    }
  } catch (error) {
    return {
      success: false,
      message: "An error occurred while creating the movement.",
      error: error.message,
    };
  }
}

async function getStock(id) {
  try {
    const quantityStock = await movementRepository.getStock(id);

    return {
      success: true,
      balance: parseInt(quantityStock[0].stock),
    };
  } catch (error) {
    return {
      success: false,
      message: "An error occurred in the database.",
    };
  }
}

module.exports = { getAllMovement, createMovement, getMovementById, getStock };
