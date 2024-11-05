import Product from "../models/product.model.js";
import mongoose from "mongoose";


export const getProduct = async (request, response) => {
    try {
        const products = await Product.find();
        response.json(products);
    }
    catch(err) {
        response.status(500).json({ message: err.message });
    }
};

export const createProduct = async (request, response) => {
    const product = request.body;

    if(!product.name || !product.price || !product.image || !product.brand) {
        return response.status(400).json({message: "Please fill all fields"});
    }

    const newProduct = new Product(product);


    try {
        newProduct.save();
        response.status(201).json(newProduct);
    }
    catch(err) {
        response.status(500).json({message: err.message});
    }

};

export const updateProduct = async (request, response) => {
    const { id } = request.params;
    const product = request.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success: false, message:  "Invalid product id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        response.status(200).json({success: true, data: updatedProduct});
    }
    catch(err) {
        response.status(500).json({success: false, message: err.message });
    }
};

export const deleteProduct = async (request, response) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return response.status(404).json({ success: false, message:  "Invalid product id" });
    }

    try {
        await Product.findByIdAndDelete(request.params.id);
        response.json({ message: "Product deleted" });
    }
    catch(err) {
        response.status(500).json({ message: err.message });
    }
};

export const getProductByID = async (request, response) => {
    try {
        const product = await Product.findById(request.params.id);
        if (!product) {
            return response.status(404).json({ message: "Product not found" });
        }
        response.json(product);
    }
    catch(err) {
        response.status(500).json({ message: err.message });
    }
    };