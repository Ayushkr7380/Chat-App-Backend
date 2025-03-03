import { config }  from "dotenv";
import  express  from "express";

config();
const app = express();

app.use("/chat",(req,res)=>{
    res.status(200).send("ChatApp is working..!!")
})

export default app;