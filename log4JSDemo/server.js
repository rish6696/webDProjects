const express=require('express');
const app=express();
const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
  categories: { default: { appenders: ['cheese'], level: 'trace' } }
});
 
const logger = log4js.getLogger('cheese');

app.use('/',(req,res)=>{
    logger.debug(JSON.stringify({name:"rishabh",status:false}));
    console.log('hello world');
    res.send('hello world');
})

app.listen(8593,()=>{
    console.log("server started");
})