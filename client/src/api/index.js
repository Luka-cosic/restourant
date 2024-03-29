import axios from "axios";
import { getUser } from "../components/Login/JS/login";

const API = axios.create({ baseURL: "https://restaurant1-1089fa3ddcde.herokuapp.com/" });
API.interceptors.request.use((req)=>{
    if(getUser()){
        req.headers.Authorization = "Bearer " + getUser().token
    }
    return req
});
export const createMeal = (mealData) =>{return API.post("/meals", mealData) };
export const fetchAll = ()=> { return API.get("/meals/fetchAll") };
export const likeMeal = (id, user)=>{return API.post(`/meals/${id}/likeMeal`, user)};
export const deleteMeal = (id)=>{return API.delete(`/meals/${id}`)};
export const editMeal = (editMeal)=>{return API.patch(`/meals`, editMeal)};
export const commentMeal = (id, comment)=>{return API.post(`meals/comments`, {id: id,comment:comment})};

export const signUp = (newUser)=>{return API.post("/user/newUser", newUser)};
export const signIn = (newUser)=>{return API.post("/user/signIn", newUser)};
export const cart = (forCart)=>{return API.post("/user/cart", forCart)};
export const getFromCart_1 = (userId)=>{return API.get(`/user/${userId}`)};
export const delFromCart = (userId, mealId)=>{return API.post("/user/del", {userId, mealId})};

export const bookTable = (bookedTable) => {return API.post("/book/table", {bookedTable})};
export const getBookdTables = ()=>{return API.get("/book/fetchAll")};
export const deleteCard = (id)=>{return API.post("/book/delCard", {id})};


export const addEmployee = (newEmployee)=>{ return API.post("/user/newEmployee", newEmployee) };
export const getStaff = (staff)=>{ return API.post("/user/findStaff", {position: staff}) };
export const delEmployee = (id)=>{ return API.post("/user/delStaff",  { id: id }) };

export const getAllTheOrders = ()=>{ return API.post("/order/getAll") };
export const orderFood = (customer, forOrder)=>{ return API.post("/order", {customer, forOrder}) };
export const deleteOrderedCard = (id)=>{ return API.post("/order/delCard", {id: id}) };



