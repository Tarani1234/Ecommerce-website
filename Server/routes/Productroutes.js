import express from "express";

import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../Controllers/productControllers.js";

import { protect, admin
 } from "../middlewares/authmiddleware.js";


const router = express.Router();

router.post('/', protect, admin, createProduct)
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id',protect, admin, updateProduct);
router.delete('/:id', protect, admin, deleteProduct);

export default router;