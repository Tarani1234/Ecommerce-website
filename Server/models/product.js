import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
    title : {type : String, required : true },
    description : {type : String},
    price : {type : Number, required : true},
    stock : {type : Number, default : 0},
    category : {type : String},
    image : {type : String},
}, {timestamps : true});


export default mongoose.model("product", productSchema);