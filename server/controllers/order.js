import Ordered from "../models/ordered.js";
import Users from "../models/users.js";
import mongoose from "mongoose";


export const getAll = async (req, res) => {
    try {
        let result = await Ordered.find({});
        const allOrders = result.filter((el)=>{
            return el.forOrder.length !== 0;
        })
        
        res.status(201).json({ allOrders });
    } catch (error) {
        console.log(error);
        
    }
}
export const orderFood = async (req, res) => {

    let {name, lastName, email, adress, phone, total} = req.body.customer;
   
    let forOrder = req.body.forOrder;

    let tot = 0
    forOrder.map((el)=>{
        tot += el.col * el.price;
    })
   
    try {
        // const existingUser = await Ordered.findOne({ email: email });
        const user = await Users.findOne({ email: email});
        
        // if(existingUser){
        //     existingUser.adress = adress;
        //     existingUser.phone = phone,
        //     existingUser.total = tot;
        //     existingUser.forOrder = forOrder;

        //     const orderedFood = await existingUser.save();
           
        //     if(orderedFood){
        //         user.cart = [];
        //         user.save();
        //     }
        //     res.status(200).json({ orderedFood, msg1: "You have successfully ordered" });
        //     return
        // }
        
        const result = await Ordered.create({ name: name, lastName: lastName, email: email, adress: adress, phone: phone, total: tot, forOrder: forOrder });
        const orderedFood = await Ordered.find({});
       
        if(result){
            user.cart = [];
            user.save();
        }
        res.status(200).json({orderedFood, msg1: "You have successfully ordered", msg2: "ok"});
        
    } catch (error) {
        console.log(error);

    }
}

export const deleteCard = async (req, res)=>{
    const id = req.body.id
    // const current = await Ordered.findOne({_id: id});
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status("404").send("No post with that id");
   await Ordered.deleteOne({_id: id})
   const arrAfterDel = await Ordered.find({});
   
   
    
    res.status(201).send(arrAfterDel);
    
}
