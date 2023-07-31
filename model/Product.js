import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    password: {
        type: String,
        required: true,
    },

    batch: {
        type: String,
        required: true
    },
},
{timestamps: true}
);

// const Product = mongoose.model("Product", productSchema);
// module.exports = Product

export default mongoose.model("Product", productSchema);