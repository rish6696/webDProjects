const express=require('express')
const app=express();
const OneSignal = require('onesignal-node');

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use('/',(req,res)=>{
    const  myClient = new OneSignal.Client({      
        userAuthKey: 'ZGIzYjNmYzAtOTgxOS00MTlmLWE2ZTgtMWY4ZjYwZThjNzMx',      
        app: { appAuthKey: 'MGQ0YTliYWQtMzc4Ny00NjMzLTkzNDEtZWMzMjlhNTcxNmI3', appId: '57c21ab0-559b-47e1-af8c-e791cf2b1b63' }      
    });      
          
    var firstNotification = new OneSignal.Notification({        
        include_player_ids: ["beb375d0-3614-48ed-a3f8-49ea58667035"] ,
        template_id:'ec76c4aa-14cd-4490-8947-ea3157d2ece0',
        data:{"_id":"786464131"}
    });      
     
        
    myClient.sendNotification(firstNotification, function (err, httpResponse,data) {      
       if (err) {      
           console.log('Something went wrong...');  
           res.send('error')    
       } else {      
           console.log(data);    
           res.send('hello world')  
       }      
    });      
         
    
})

app.listen(9968,()=>{
    console.log('server started')
})
      
      
 