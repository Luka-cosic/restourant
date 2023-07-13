import Users from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const signUp = async (req, res) => {
    const user = req.body;

    try {
        const existingUser = await Users.findOne({ email: user.email });

        if (existingUser) { return res.status(400).json({ message: "This email already exits" }) };

        if (user.password !== user.repeatPass) { return res.status(400).json({ message: "Passwords do not match" }) };


        const hashedPassword = await bcrypt.hash(user.password, 12);
        const result = await Users.create({ firstName: user.firstName, lastName: user.lastName, email: user.email, password: hashedPassword });
        const token = jwt.sign({ email: result.email, id: result._id }, "test", { expiresIn: "2h" });
        res.status(200).json({ result, token })
    } catch (error) {
        console.log(error);
    }
}

export const signIn = async (req, res) => {
    const { email, password, repeatPass } = req.body;

    try {
        if (password !== repeatPass) { return res.status(403).json({ message: "You make mistake when you write password" }) }
        const result = await Users.findOne({ email: email });
        if (!result) { return res.status(404).json({ message: "There is no user with that email" }) };
        const pass = await bcrypt.compare(password, result.password);
        if (!pass) { return res.status(400).json({ message: "Password is wrong" }) }

        const token = jwt.sign({ email: result.email, id: result._id }, "test", { expiresIn: "2h" });
        res.status(200).json({ result, token })
    } catch (error) {
        console.log(error);

    }
}

export const cart = async (req, res) => {
    try {

        let mealId = req.body.mealId;
        let id = req.body.user;
        let orderedMeal = req.body;
        let doc = await Users.findById(id);
      
        // doc.cart = [];
        // doc.save();
        
        doc.cart.forEach((el, i) => {
      
            if (el.mealId === mealId && req.body.op === "plus") {
                doc.cart[i] = { ...el, col: el.col + 1 }
            }
            else if(el.mealId === mealId && req.body.op === "minus") {
                doc.cart[i] = { ...el, col: el.col - 1 }
            }
        })
        let index = doc.cart.findIndex((el) => {
            return el.mealId === mealId
        })


        if (index === -1) { doc.cart.push(orderedMeal) };

        let saved = await doc.save();

        res.status(200).json(saved);
    } catch (error) {
        console.log(error);

    }
};

export const getFromCart = async (req, res) => {
    try {
        let userId = req.params.id
        let cart = (await Users.findOne({ _id: userId })).cart;

        res.status(200).send(cart)
    } catch (error) {
        console.log(error);

    }
}

export const delFromCart = async (req, res)=>{
    console.log(req.body);
    let userId = req.body.userId;
    let mealId = req.body.mealId;
    let doc = await Users.findById(userId);
    let index = doc.cart.findIndex((el)=>{
        return el.mealId === mealId
    })
    doc.cart.splice(index,1);
    let saved = await doc.save();
    // console.log(saved);
    
   res.status(200).send(saved.cart)
    
       
}