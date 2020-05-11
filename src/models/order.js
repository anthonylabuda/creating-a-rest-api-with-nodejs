import mongoose from "mongoose";

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: {
        required: true,
        type: Number
    },
    quantity: {
        required: true,
        type: Number
    }
});

const Order = mongoose.model(`Order`, schema);

export default Order;
