import mongoose from "mongoose";

const SideBarDataSchema = new mongoose.Schema({

    name : String,
    image : String,
    price : Number,
    quantity : {
        type: Number,
        default: 1
    },
 })
 const SideBarData = mongoose.model('SideBarData', SideBarDataSchema,"sideBarData");

export default SideBarData;