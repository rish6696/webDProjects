const subAdminSchema = new mongoose.Schema({
    name:{ type:String,required:true,unique:true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, required: true, default: new Date() },
    permissions : []
})


export default subAdminSchema
