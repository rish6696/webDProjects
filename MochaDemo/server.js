const express = require('express');
const app = express();
const fareutiils = require('./fareUtills')

app.use(express.urlencoded({extended:true}))
app.use(express.json());


app.use('/',express.static(__dirname+'/public'));


app.post('/calfare',(req,res)=>{
    let km = parseFloat(req.body.km);
    let min =parseInt(req.body.min);
    const fare = fareutiils.calFare(km,min);
    res.send({fare})
})


app.listen(4805,()=>{
    console.log("server started at the port 4805")
})