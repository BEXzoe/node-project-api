const pool = require("../config/db");

async function getAllMovement() {
  const sql = "select * from movement";
  const [rows] = await pool.execute(sql);
  return rows;
}

async function getMovementById(id) {
  const sql = "select * from movement where id_product = ?";
  const [rows] = await pool.execute(sql, [id]);
  return rows;
}

async function createMovement(id_product, description_movement, quantity) {
  const sql =
    "INSERT INTO `boutique`.`movement` (`id_product`, `description_movement`, `quantity`) VALUES (?,?,?);";
  const [newMovement] = await pool.execute(sql, [
    id_product,
    description_movement,
    quantity,
  ]);
  return newMovement;
}

async function getStock(id) {
  const sql =
    "SELECT SUM(quantity) as stock FROM movement WHERE id_product = ?";
  const [stock] = await pool.execute(sql, [id]);
  return stock;
}

module.exports = { getAllMovement, getMovementById, createMovement, getStock };
