import mongoose from "mongoose";
import Book from "../models/book.js";


export const fetchAll = async (req, res) =>{
    const all = await Book.find();
    res.status(201).json(all);
    
}
export const bookTable = async (req, res)=>{
    const {bookedTable} = req.body;
    
    const doc = new Book(bookedTable);
    
    try {
       await doc.save(); 
       const allBooked = await Book.find();
    //    console.log(allBooked);
       
       res.status(201).json(allBooked);
       
    } catch (error) {
        
    }  
}

export const delCard = async (req, res)=>{
    let id = req.body.id;
    await Book.deleteOne({_id: id});
    const booked = await Book.find();
    res.status(201).json(booked)

}