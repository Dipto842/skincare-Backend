import mongoose from "mongoose";


const CaridSchema = new mongoose.Schema({

    name : String,
    image : String,
    price : String,
 })

const Carid = mongoose.model('Carid', CaridSchema,"Carid");



export default Carid;