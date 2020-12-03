const paymentSchema= new mongoose.Schema({
    type:   { type: String, required: true },
    amount: { type: Number, required: true },
    userId :{ type:String,required:false },
    paymentResponse : { type:Object , required : false } ,
    recieverAdminId : {type:String,required:true},
})
