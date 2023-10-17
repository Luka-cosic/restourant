import Ordered from "../models/ordered.js";

export const orderFood = async (req, res) => {
   
    let {name, lastName, email, adress, phone, total} = req.body.customer;
   
    let forOrder = req.body.forOrder;
    
    try {
        const existingUser = await Ordered.findOne({ email: email });
    
        if(existingUser){
            existingUser.adress = adress;
            existingUser.phone = phone,
            existingUser.total = total;
            existingUser.forOrder = forOrder;
    
            existingUser.save();
            return
        }
        
        const result = await Ordered.create({ name: name, lastName: lastName, email: email, adress: adress, phone: phone, total: total, forOrder: forOrder });
    } catch (error) {
        console.log(error);

    }
}
