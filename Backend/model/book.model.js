import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    category:String,
    image:String,
    
})

const Book/* Name of Model*/=mongoose.model("Book"/* Name of collection*/,bookSchema)

export default Book;