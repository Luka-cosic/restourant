import jwt from "jsonwebtoken";

export const auth = async (req, res, next)=>{
    const token = req.headers.authorization.split(" ")[1];
    try {
        let decodeToken = jwt.verify(token,'test');
        req.userId = decodeToken.id;
        
    } catch (error) {
        // console.log(error);
        
    }
    
    
    next()
}