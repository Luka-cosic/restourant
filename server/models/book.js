import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
            date: Date,
            time: String,
            table: String,
            persons: String,
            name: String,
            phone: String,
            email: String,
            comment: String
      
})

const Book = mongoose.model('BookSchema', bookSchema);

export default Book;