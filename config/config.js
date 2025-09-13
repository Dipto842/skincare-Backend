

import mongoose from 'mongoose';
const connectDB= async()=>{
    try{
        await mongoose.connect('mongodb+srv://skincare:TfAdRMlDrEiEW3JU@cluster0.ssb3nmc.mongodb.net/skincare?retryWrites=true&w=majority&appName=Cluster0')
        console.log("MongoDB connected");
        
    }
    catch(err){
        console.log(err);
    }
}
export default connectDB;