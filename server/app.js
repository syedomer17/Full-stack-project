import express from "express"
import config from "config"
import "./utils/dbConnect.js"

import userRouter from "./controllers/Users/index.js"
import publicRouter from "./controllers/public/index.js"

const app = express()

const PORT = config.get("PORT") || 5002;

app.use(express.json())// for accepting data from user postman or broser

app.get("/", (req, res)=>{
    try {

        res.status(200).json({msg: `server is running⚡`})
        
    } catch (error) {
        console.log(error);
        res.status(401).json({msg: error})
    }
});

app.use("/api/public",publicRouter);
app.use("/api/users",userRouter);

app.use((req, res)=>{
    res.status(200).json({msg: `Invalid Route❌`})
})

app.listen(PORT, ()=>{
    console.log(`YOUR SERVER IS RUNNING AT ${PORT}`);
    
})