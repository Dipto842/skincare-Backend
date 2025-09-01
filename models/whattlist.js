import mongoose from "mongoose";

const whattlist = new mongoose.Schema({

    name : String,
    image : String,
    price : Number,
    quantity : Number
 })
 const List = mongoose.model('List', whattlist,"List");

export default List