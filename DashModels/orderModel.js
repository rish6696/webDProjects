import paymentSchema from './OrdersSchema/paymentSchema'
import billingSchema from './OrdersSchema/billingSchema'
import FoodSchema from './FoodModel'

const OrderSchema = new mongoose.Schema({
    userIds:[ { type: String, required: true } ],
    // userName: { type: String, required: true },
    carttToken: { type: String, required: true },

    status: { type: Number, required: true },   // o incomplete 1 complete
    payments : [ paymentSchema ]
    billing: billingSchema,
    items: [ FoodSchema ],
    createdAt: { type: Date, required: true, default: new Date() },
    deliveryResponse: {},
  });