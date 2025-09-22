const express = require("express");
const app = express();
const PORT = 3001;
const productRoutes = require("./src/routes/productRoute");
const movementRoutes = require("./src/routes/movementRoute");

app.use(express.json());

app.use("/products", productRoutes);
app.use("/movements", movementRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    mensaje: `The '${req.url}' endPoint does not exist.`,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
