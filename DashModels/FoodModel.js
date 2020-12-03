import mongoose from 'mongoose'

const foodItemSchema = new mongoose.Schema({


    categoryId:{type :Number,required:true }

    // it will represent to which category this food item will belong to
    //  only the direct category to which it is a part of. 

    id_no: { type: Number, required: true, unique:true },
    parent_id: { type: Number, required: true },
    product_type: { type: String, required: false },
    course: { type: String, required: false },
    product_name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: String, required: false },
    ingredients: { type: Array, required: false },
    trivia: { type: String, required: false },
    anthropology: { type: String, required: false },
    pronounciation: { type: String, required: false },
    beverage_recommendation: { type: String, required: false },
    recommendate_for_two: { type: String, required: false },
    is_locally_sourced: { type: String, required: false },
    product_image: { type: String, required: false },
    product_video: { type: String, required: true },
    video: { type: String, required: false },
    video_thumb: { type: String, required: false },
    video_image: { type: String, required: false },
    video_text: { type: String, required: false },
    drink_video: { type: String, required: false },
    drink_background_image: { type: String, required: false },
    drink_image: { type: String, required: false },
    food_filter_id: { type: String, required: true },
    food_label_id: { type: String, required: true },
    drinktype_id: { type: String, required: false },
    drinkfilter_id: { type: String, required: false },
    icon_name: { type: String, required: true },
    icon_image: { type: String, required: true },
    classification: { type: Array, required: false },
    quantity: { type: String, required: false },
    drinktype_flag: { type: String, required: false },
    category_type: { type: String, required: true },
    share_video_link: { type: String, required: false },
    course_icon_name: { type: String, required: false },
    course_icon_image: { type: String, required: false },
    next_screen_layout: { type: String, required: false },
    drink_filter_icon_name: { type: String, required: false },
    drink_filter_icon_image: { type: String, required: false },
    parent_category_type: { type: String, required: false },
    parent_category_icon_name: { type: String, required: false },
    parent_category_icon: { type: String, required: true },
    parent_next_screen_layout: { type: String, required: false },
    product_pos_id: { type: String, required: false },
    sub_child_category: { type: String, required: false },
    sub_child_category_icon_name: { type: String, required: false },
    sub_child_category_icon: { type: String, required: false },
    sub_child_next_screen_layout: { type: String, required: false },
    menu_type: { type: String, required: false },
    category_icon_name: { type: String, required: false },
    category_icon: { type: String, required: false },
})

export default foodItemSchema