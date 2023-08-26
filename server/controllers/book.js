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
       let data =  await doc.save(); 
    } catch (error) {
        
    }
    
}