import mongoose from "mongoose";

const cartShema = mongoose.Schema({
    user: String,
    cart: [
        {
            title: String,
            mealId: String,
            recipe: String,
            img: String,
            price: String,
            col: Number
        }
    ]
})

const Cart = mongoose.model('CartSchema', cartShema);

export default Cart;