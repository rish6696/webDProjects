const express=require('express');
const app=express();
const env=require('dotenv');
env.config();
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const {google} =require('googleapis')
const {oauth2} =require('googleapis/build/src/apis/oauth2')

const googleConfig={
    clientId:process.env.CLIENT_ID,
    clientSecret:process.env.CLIENT_SECRET,
    redirectUrl:'http://localhost:5896/redirect'
}
function createConnection() {
    return new google.auth.OAuth2(
      googleConfig.clientId,
      googleConfig.clientSecret,
      googleConfig.redirectUrl
    );
  }
const defaultScope = [
    'profile','email',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/plus.login'

  ];
  function getConnectionUrl(auth) {
    return auth.generateAuthUrl({
      access_type: 'offline',
      prompt: 'consent', // access type and approval prompt will force a new refresh token to be made each time signs in
      scope: defaultScope
    });
  }
  function urlGoogle() {
    const auth = createConnection(); // this is from previous step
    const url = getConnectionUrl(auth);

    return url;
  }
  app.get('/getAuth',(req,res)=>{
      const url=urlGoogle();
      res.redirect(url)
  })

  app.get('/redirect',async (req,res)=>{
      const code =req.query.code
      const response=await getGoogleAccountFromCode(code)
      res.send(response)
  })

  async function getGoogleAccountFromCode(code) {
  
    // get the auth "tokens" from the request
    const auth=createConnection();
    
    const data = await auth.getToken(code);
    const tokens = data.tokens;
    console.log(tokens.access_token)
    
    // add the tokens to the google api so we have access to the account
    auth.setCredentials(tokens);
    
    // connect to google plus - need this to get the user's email
    const people = getGooglePeopleApi(auth);
    try{
    const me = await people.people.connections.list({resourceName:'people/me'})
    }
    catch(err){
        console.log(err)
        return err
    }
    
    
    
    // get the google id and email
   // const userGoogleId = me.data.id;
   // const userGoogleEmail = me.data.emails && me.data.emails.length && me.data.emails[0].value;
  
    // return so we can login or sign up the user
    // console.log(userGoogleId)
    // console.log(userGoogleEmail)
    // console.log(tokens)
    return {
      meobject:me
      // id: userGoogleId,
      // email: userGoogleEmail,
      // tokens: tokens, // you can save these to the user if you ever want to get their details without making them log in again
    };
  }

  function getGooglePeopleApi(auth) {
    return google.people('v1',auth) 
  }


app.listen(port=5896,()=>{
    console.log('server started at port '+port)
})

