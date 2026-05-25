const express = require("express");

const app = express();

let products = [];

for (let i = 1; i <= 100; i++) {
  products.push({ 
      id: i, 
      name: `Product ${i}` 
  });
}

app.get("/products", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedProducts = products.slice(startIndex, endIndex);

  res.json({
    page: page,
    limit: limit,
    total: products.length,
    data: results
  });
});

app.listen(3000, function() {
  console.log("Server is running on port 3000");
});