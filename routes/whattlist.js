import express from "express";

import List from "../models/whattlist.js";




const router = express.Router();


router.post('/', async (req, res) => {
    const {_id, name, price, image, quantity } = req.body;
    const finedata =await List.findOne({price})
    if(finedata){
        return res.status(400).json({
            success: false,
            message:" This product has already been added. ✅"
        })
    }

    const newCarid = new List ({
        name,
        price: Number(price),
        image,
        quantity: 1
    });

    const savedata = await newCarid.save();
    res.json(savedata);
});
router.get('/list', async (req, res) => {
    const Data = await List.find();
    res.json(Data);
});

router.delete('/delete/:id',async(req,res)=>{
    const {id}= req.params
    const fineData = await List.findByIdAndDelete(id)
    res.json(fineData)
})





export default router;