
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import connectDB from './config/config.js';
import userRoutes from './routes/caridRoutes.js';
import sidebarRoutes from './routes/SidebarData.js';
import whattlist from './routes/whattlist.js'
import All from './routes/All.js'
 const PORT = process.env.PORT || 5000;


const app= express();
app.use(cors());
app.use(express.json());

connectDB()

// routes
 app.use("/carid",userRoutes )
 app.use("/sidebarData",sidebarRoutes)
app.use('/whattlist', whattlist)
app.use('/AllData', All)


app.listen(PORT, () => console.log(` Server running on port ${PORT}`));




