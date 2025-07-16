import Product from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock, image } = req.body;
    console.log("BODY: ", req.body); 
    const product = new Product({
      name,
      price,
      description,
      category,
      stock,
      image,
      user: req.user._id, 
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
