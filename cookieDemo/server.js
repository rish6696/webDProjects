const express=require('express')
const app=express();
const cookieParser=require('cookie-parser');

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cookieParser())

app.get('/get',(req,res)=>{
    console.log(req.cookies,"this is the value of cookies")
    res.send('get data')
})

app.get('/',(req,res)=>{
    res.cookie('token','jfjsfgsjbfgsjkbfjsfgbsjfgbsjgbjbg')
    res.send('hello world')
})



app.listen(46478,()=>{
    console.log('server started')
})