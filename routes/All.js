
import express from 'express'
import AllData from '../models/AllData.js'

const route =express.Router()

route.get( '/',async(req,res)=>{
    const data = await AllData.find();
     res.json(data)
    
})

export default route