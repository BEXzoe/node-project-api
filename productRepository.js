const pool = require("../config/db.js");

async function getAllProduct() {
  const sql = "SELECT * FROM product";
  const [rows] = await pool.execute(sql);
  return rows;
}

async function getProductById(id) {
  const sql = "SELECT * FROM product WHERE id = ?";
  const [rows] = await pool.execute(sql, [id]);
  return rows;
}

async function postAllProduct(id, description, valor) {
  const sql = "INSERT INTO product (id, description, valor ) VALUES (?,?,?) ";
  const [postProduct] = await pool.execute(sql, [id, description, valor]);

  return postProduct;
}

async function updateProduct(id, description, valor) {
  const sql = "UPDATE product SET description = ?, valor = ? WHERE id = ?";
  const [putProduct] = await pool.execute(sql, [description, valor, id]);
  return putProduct;
}

async function deleteProduct(id) {
  const sql = "DELETE FROM product WHERE id = ?";
  const [productDeleted] = await pool.execute(sql, [id]);
  return productDeleted;
}

module.exports = {
  getAllProduct,
  postAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
