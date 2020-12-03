const express=require('express');
const app=express();

app.set('view engine', 'html');
app.engine('html', require('hbs').__express);


app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/',express.static('public'))



app.get('/',(req,res,next)=>{
    res.render('home')
})


app.listen(8800,()=>{
    console.log("server started")
})