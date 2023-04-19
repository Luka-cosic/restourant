import mongoose from "mongoose";

const mealSchema = mongoose.Schema({
    creator: String,
    title: String,
    recipe: String,
    img: String,
    price: String,
    prepTime: String,
    type: String,
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [String],
        default: []
    },
    createdAt: {
        type: String,
        default: new Date()
    }
})

const Meals = mongoose.model('MealSchema', mealSchema);

export default Meals;