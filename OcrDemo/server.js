
const exp=require('express');
const app=exp();
app.use(exp.urlencoded({extended:true}))
app.use(exp.json())

const {TesseractWorker} =require('tesseract.js')
const worker = new TesseractWorker();
const myImage='ad.jpg'
const utill=require('util')


app.get('/',(req,res)=>{

    worker.recognize(myImage)
  .progress(progress => {
    console.log('progress', progress);
  }).then(result => {
      console.log(result.text)
  }).catch(err=>res.send(err));
  
    
})

app.listen(1458);
