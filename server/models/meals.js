import mongoose from "mongoose";

const mealSchema = mongoose.Schema({
    creator: String,
    title: String,
    recipe: String,
    img: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Meals = mongoose.model('MealSchema', mealSchema);

export default Meals;