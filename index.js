import  express  from "express";

const app = express();

app.use("/chat",(req,res)=>{
    res.status(200).send("ChatApp is working..!!")
})

export default app;