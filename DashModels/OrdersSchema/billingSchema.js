const billingSchema= new mongoose.Schema({
    shipping: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    sumItemOriginalPrice: { type: Number, required: true },
    tax: { type: Number, required: true },
    discount: { type: Number, required: true },
    total: { type: Number, required: true },
    codAmount: { type: Number, required: true, default: 0 },
    coupon: { type: Number, required: true },
    isCouponApplied: { type: Boolean, default: false, required: true },
    appliedCouponId: { type: String, index: true },
    appliedCouponCode: { type: String },
})
