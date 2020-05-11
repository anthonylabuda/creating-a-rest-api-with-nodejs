import mongoose from "mongoose";

const schema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        required: true,
        type: String
    },
    price: {
        required: true,
        type: Number
    },
    image: {
        type: String
    }
});

const Product = mongoose.model(`Product`, schema);

export default Product;
