import express from "express";
import mongoose from "mongoose";
import { createProduct, deleteProduct, getProduct, getProductByID, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();


router.get("/", getProduct);
router.get("/:id", getProductByID);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updateProduct);

export default router;
