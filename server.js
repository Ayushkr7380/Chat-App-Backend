import app from "./index.js";

const PORT = process.env.PORT || 5005;

app.listen(PORT,()=>{
    console.log(`ChatApp is running at port ${PORT}.`);
});