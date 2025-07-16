import express from "express";
import protect from "../middlewares/authmiddleware.js";
import { createProduct } from "../Controllers/productControllers.js";

const router = express.Router();
 router.post('/', protect, createProduct);


export default router;