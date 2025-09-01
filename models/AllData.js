import mongoose from "mongoose";


const AllDataSchema= new mongoose.Schema({
    
    name : String,
    image : String,
    price : String,

})

const AllData = mongoose.model("AllData",AllDataSchema,"AllData")
export default AllData