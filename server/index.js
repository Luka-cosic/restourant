import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import  mealRoutes  from "./routes/meals.js";
import  userRoutes  from "./routes/users.js";
import  bookRoutes  from "./routes/book.js";
import  orderRoutes  from "./routes/order.js";
import  { socketIO } from "./socketIo/socketIO.js";
import dotenv from "dotenv";
import { createServer } from "http";


const app = express();
const result = dotenv.config();
const httpServer = createServer(app);


const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(cors());


socketIO(httpServer);

app.use("/meals", mealRoutes)
app.use("/user", userRoutes)
app.use("/book", bookRoutes)
app.use("/order", orderRoutes)

app.get("/", (req, res) => {
  res.send("Hallo world")
});

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> httpServer.listen(port, ()=> console.log(`Listening on port ${port}`)))
.catch((error)=> console.log(error.message));
  
  
  
  
  
  
