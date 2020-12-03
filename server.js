const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("welcome to screen")
})

app.listen(1245,()=>{
    console.log("server started");
})