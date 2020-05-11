import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: Number,
    quantity: Number
});

export default mongoose.model(`Order`, orderSchema);
