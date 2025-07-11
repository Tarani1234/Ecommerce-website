import mongoose from "mongoose";
import product from "../models/product.js";


export const createProduct = async(req, res) =>{
     try{
      const product = new product(req.body);
      const save = product.save();
      res.status(201).json(save);
     }
     catch(err){
        res.status(401).json({message : err.message});
     }
}

// get all the products
export const getAllProducts = async(req, res)=>{
    try{
      const products = await product.find();
      res.json(products);
    }
    catch(err){
      res.status(500).json({message : message.err})
    }
}
//get productById
export const getProductById = async(req, res) =>{
     const {id} = req.params();
     // validate objectId
   if(!mongoose.Types.ObjectId.isValid(id)){
      return res.json(400).json({message : "invalid product id"})
   }
     try{
      const product = await product.findById(id);
       if(!product){
         return res.json(404).json({message : "product not found"});
       }
       return res.json(201).json(product)
     }
     catch(err){
      res.status(500).json({message : "server error", error : err.message})
     }
}

// update the productId

export const updateProduct = async(req, res) =>{
    const {id} = req.params
    // validate the mongodb objectid
    if(!mongoose.Types.ObjectId(id)){
        return res.status(400).json({ message: "Invalid product ID" });
    }
    try{
      const Product = await product.findByIdAndUpdate( id, {$set:  req.body}, 
        { new: true, runValidators: true });
        
        if(!Product){
            return res.status(404).json({message : "product is not "})
        }
        return res.json(201).json(product)
    }

    catch(err){
        res.status(500).json({message : err.message})
    }
}

// delete the product

export const deleteProduct = async(req, res) =>{
       try{
      await product.findByIdAndDelete(req.params.id);
      res.json({message : 'product is deleted'})
       }
       catch(err){
          res.status(500).json({message : err.message})
       }
}

