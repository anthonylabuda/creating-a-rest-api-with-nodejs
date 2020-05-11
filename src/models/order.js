import mongoose from "mongoose";

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: {
        required: true,
        ref: `Product`,
        type: mongoose.Schema.Types.ObjectId
    },
    quantity: {
        required: true,
        type: Number
    }
});

const Order = mongoose.model(`Order`, schema);

export default Order;
