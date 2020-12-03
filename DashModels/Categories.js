// unique collection for each restraurant
const Categories = new mongoose.Schema({
    categoryName:{type:String,required:true,unique:true},
    categoryIcon: { type: String, required: true },
    childs  : [ type:Array,required:true ]  // array of id (Number) of subcategories 
    hasCategories:{ type:Boolean,required:true }   
})
