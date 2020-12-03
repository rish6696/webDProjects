// const mongoose=require('mongoose')

// mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})
// .then(x=>console.log('connected suceessfully to mongodb'))
// .catch(e=>console.log('this is the error while connecting to mongodb',e))

const redis=require('redis')
const redisUrl='redis://127.0.0.1:6379'
const client =redis.createClient(redisUrl);

const obj ={name:"rishabh"}

console.log(client.set('hi', JSON.stringify(obj) ))

const utill =require('util')
const getData=utill.promisify(client.get.bind(client))
const remove=utill.promisify(client.del.bind(client))

remove('hii').then(x=>console.log(x,"kjsjachubhd"))



 const m=getData('hi').then((x)=>{
     if(!x) console.log("null")
     console.log(x)
 }).catch(e=>console.log(e))

client.on('error',(x)=>{
    console.log('there is some error',x)
})