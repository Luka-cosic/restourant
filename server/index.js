import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Schema } from 'mongoose';
import dotenv from "dotenv";
import bodyParser from 'body-parser';
import  mealRoutes  from "./routes/meals.js";
import  userRoutes  from "./routes/users.js";
import  bookRoutes  from "./routes/book.js";
import  orderRoutes  from "./routes/order.js";
import { Server } from 'socket.io';
import { createServer } from "http";


const app = express();
const httpServer = createServer(app);

const port = 5000;
const url = "mongodb+srv://lukarestaurant:N2HlBgBsZyrbhFKG@cluster0.2kfykcy.mongodb.net/?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(cors());

const io = new Server(httpServer,{
  cors: {
    origin: "http://localhost:3000"
  }
});


app.get("/", (req, res) => {
    
  res.send("Hallo world")
});




app.use("/meals", mealRoutes)
app.use("/user", userRoutes)
app.use("/book", bookRoutes)
app.use("/order", orderRoutes)


io.on('connection', (socket) => {
  console.log('a user connected');
});



mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> httpServer.listen(port, ()=> console.log(`Listening on port ${port}`)))
.catch((error)=> console.log(error.message));
  
  
  
  
  
  
// const kittySchema = new mongoose.Schema({
//     name: String
//   });

//   kittySchema.methods.speak = function speak() {
//     const greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
    
//   };

//   const Kitten = mongoose.model('Kitten', kittySchema);
//   const silence = new Kitten({ name: 'Silence' });
//   const fluffy = new Kitten({ name: 'fluffy' });

//   await fluffy.save();
//   await silence.save();
//   const filter = await Kitten.find({ name: /^Sil/ });
//   const kittens = await Kitten.find();
// console.log(filter);

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
// }




// app.listen(port,()=>{
//     console.log(`Server running on port ${port}`);
    
// })