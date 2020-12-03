import SubAdmins from './SubAdminModel'
const restraurantSchema = new mongoose.Schema({
    name:{type:String,required :true},
    emails:[ { type:String ,required :true }],
    phones :[ { type:String ,required :true } ],
    filter :[],
    QRCode: { type: String, required: true },
    subAdmins : [SubAdmins],
    mainCategories: { type:Array , required:true } // array of id(number) of main categories
  });


  