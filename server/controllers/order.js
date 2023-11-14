import Ordered from "../models/ordered.js";

export const orderFood = async (req, res) => {

    console.log(res);
    
   
    let {name, lastName, email, adress, phone, total} = req.body.customer;
   
    let forOrder = req.body.forOrder;

    let tot = 0
    forOrder.map((el)=>{
        tot += el.col * el.price;
    })
   
    try {
        const existingUser = await Ordered.findOne({ email: email });
        if(existingUser){
            existingUser.adress = adress;
            existingUser.phone = phone,
            existingUser.total = tot;
            existingUser.forOrder = forOrder;
    
            existingUser.save();
            return
        }
        
        const result = await Ordered.create({ name: name, lastName: lastName, email: email, adress: adress, phone: phone, total: total, forOrder: forOrder });
    } catch (error) {
        console.log(error);

    }
}

export const deleteCard = async (req, res)=>{
    const id = req.body.id
    const current = await Ordered.findOne({_id: id});
    current.forOrder = [];
    await current.save();
    
    
}
