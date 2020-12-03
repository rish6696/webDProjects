const express=require('express');
const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',(req,res)=>{
    res.send('hello world')
})
app.listen(1234,()=>{
    console.log("server started")
})

const elasticsearch=require('elasticsearch');
const client=new elasticsearch.Client({
    host:'localhost:9200',
    log:'trace'
})

client.ping({
    requestTimeout:3000
},(error)=>{
    if(error){
        console.trace('not well')
    }else{
        console.log('helathy')
    }
})
async function Check(){
    try {
        const response=await client.search({
            q:'pants'
        })
        
    } catch (error) {
        
    }

}
Check()