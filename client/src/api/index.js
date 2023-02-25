import axios from "axios";
import { getUser } from "../components/Login/JS/login";

const API = axios.create({ baseURL: "http://localhost:5000" });
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


export const signUp = (newUser)=>{return API.post("/user/newUser", newUser)};
export const signIn = (newUser)=>{return API.post("/user/signIn", newUser)};
