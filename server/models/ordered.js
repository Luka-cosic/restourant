import mongoose from "mongoose";

const orderedShema = mongoose.Schema({
        name: String,
        lastName: String,
        email: String,
        adress: String,
        phone: String,
        total: String,
    forOrder: [
        {
            title: String,
            mealId: String,
            recipe: String,
            price: String,
            col: Number
        }
    ]
})

const Ordered = mongoose.model('CartSchema', orderedShema);

export default Ordered;