import  express  from  "express" ;
import Carid from "../models/Carid.js";




const router = express.Router();


router.get('/', async(req, res) => {
const Data = await Carid.find();
res.json(Data)});


router.delete('/delete/:id',async(req,res)=>{
const {id} = req.params


const Delete = await Carid.findByIdAndDelete(id)
res.json(Delete)
})

router.put('/update/:id',async(req,res)=>{
    const {id}=req.params
    const updateData = req.body;
    const upred = await Carid.findByIdAndUpdate(id,
        {$set:updateData},
        {new:true}
    )
    res.json(upred)
})













export default router;