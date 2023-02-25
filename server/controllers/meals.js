import mongoose from "mongoose";
import Meals from "../models/meals.js";


export const createMeal = async (req, res) => {
    const meal = req.body;
    const newMeal = new Meals(meal);
    try {
        await newMeal.save();
        res.status(201).json(newMeal)
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export const fetchAll = async (req, res) => {
    try {
        let result = await Meals.find({});
        res.status(201).json({ result })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}

export const likeMeal = async (req, res) => {
    if(!req.userId){return res.status(400).json({message: "There is no user with that id"})}
    
    let id = req.params.id;
    let userId = req.body._id;

    const result = await Meals.findOne({ _id: id });

    let index = result.likes.findIndex((el) => { return el === userId });

    if (index === -1) { result.likes.push(userId) } else {
        result.likes.splice(index, 1)
    }

    const likedMeal = await Meals.findByIdAndUpdate({ _id: id }, result, { new: true })

    res.status(200).json(likedMeal)


}

export const deleteMeal = async (req, res) => {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status("404").send("No post with that id");
    await Meals.deleteOne({ _id: id });

    let allMeals = await Meals.find({});
    res.status(201).json({ allMeals })
};

export const updateMeal = async (req, res) => {
    let id = req.body._id;
    let meal = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status("404").send("No post with that id");
    let updated = await Meals.findByIdAndUpdate({ _id: id }, meal, { new: true });

    res.status(201).json({ updated });



}