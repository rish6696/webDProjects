// unique collection for each restraurant

const menuItemSchema= new mongoose.Schema({
    menu_type:{type:String,required:true,unique:true},
    category_icon_name: { type: String, required: true },
    category_icon: { type: String, required: true },
    items:[foodItemSchema],
    subCategory : { type :Array:required:false } ,

})
