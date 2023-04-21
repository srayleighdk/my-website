const connection = require("../config/db");

exports.getAllProducts = (req, res) => {
  connection.query(
    `SELECT * FROM products
     LEFT JOIN product_images ON products.id = product_images.product_id`,
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching products" });
        return;
      }

      // Group the images by product ID
      const imagesByProduct = results.reduce((acc, curr) => {
        if (!acc[curr.id]) {
          acc[curr.id] = {
            id: curr.id,
            name: curr.name,
            price: curr.price,
            description: curr.description,
            images: [],
          };
        }

        if (curr.image_url) {
          acc[curr.id].images.push(curr.image_url);
        }

        return acc;
      }, {});

      // Return an array of products with their images
      res.json(Object.values(imagesByProduct));
    }
  );
};

exports.getProductById = (req, res) => {
  const productId = req.params.id;

  connection.query(
    `SELECT * FROM products
     LEFT JOIN product_images ON products.id = product_images.product_id
     WHERE products.id = ?`,
    [productId],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json({ message: "Error fetching product" });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ message: "Product not found" });
        return;
      }

      // Group the images by product ID
      const imagesByProduct = results.reduce((acc, curr) => {
        if (!acc[curr.id]) {
          acc[curr.id] = {
            id: curr.id,
            name: curr.name,
            price: curr.price,
            description: curr.description,
            images: [],
          };
        }

        if (curr.image_url) {
          acc[curr.id].images.push(curr.image_url);
        }

        return acc;
      }, {});

      // Return the first product in the results (there should only be one)
      res.json(imagesByProduct[productId]);
    }
  );
};
