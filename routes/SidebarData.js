import express from "express";
import SideBarData from "../models/SideBarData.js";




const router = express.Router();

router.get('/', async(req, res) => {
const Data = await SideBarData.find();
res.json(Data)});


router.post('/add', async(req, res) => {
    const {name , price , image,quantity } = req.body;
    const chek =await SideBarData.findOne({name})

    if ( chek ){
chek.quantity +=1
const updatedData = await chek.save()
return res.json(updatedData);
    }

    const newCarid = new SideBarData({
        name,
        price: Number(price),
        image,
        quantity: 1
    })
    
    
    const savedata = await newCarid.save()
    res.json(savedata);
})

router.post("/subtract", async (req, res) => {
const {_id} = req.body;
const item = await SideBarData.findById(_id);
item.quantity -= 1;
if (item.quantity <= 0) {
  await SideBarData.findByIdAndDelete(_id);
  return res.json({ message: "Item removed" });
}
await item.save();
res.json(item);
})
    router.delete('/delete/:id',async(req,res)=>{
        const {id}=req.params
       
        
        const Delete= await SideBarData.findOneAndDelete({_id:id})
        res.json(Delete)
    })

export default router;