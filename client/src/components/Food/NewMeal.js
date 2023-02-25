import styles from "./css/newMeal.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import { base64 } from "./JS/base64.js";
import { createMeal, editMeal } from "../../api/index.js";


const NewMeal = ({ setIsVisible, setIsEdit, isEdit, currentId, setCurrentId, allMeals, setAllMeals }) => {
    
    const currentCard = allMeals.filter((el)=>{return el._id === currentId})[0];
    
    const [mealData, setMealData] = useState({ title: "", recipe: "", img: "" });
    
    const close = useRef();
    
    const handleAdd = async () => {
       const newMeal = await createMeal(mealData);
    //    Mozda nije potrebno async await, videcemo
       
        setMealData({ title: "", recipe: "", img: "" });
    };
    const handleEdit = async (e) => {
      let updated = (await editMeal(mealData)).data.updated;
      let edited = allMeals.map((el)=>{
        return (updated._id === el._id)? updated : el;
      })
      setAllMeals(edited)
      
        
        setCurrentId("");
    }

    useEffect(() => {
        if(currentId){setMealData(currentCard)}
    },[]);
    
    
    return (
        <div className={styles.container} ref={close}>
            <dir className={styles.close} onClick={() => { setIsVisible(false); setIsEdit(false); setCurrentId("") }}>
                <AiOutlineClose />
            </dir>
            <div className={styles.card}>
                <h4 className={styles.heading}>{isEdit? "Edit Meal" : "Creating a Meal"}</h4>
                <input type="text" placeholder="title" className={styles.title} onChange={(e)=>{setMealData({...mealData, title: e.target.value})}} value={mealData.title} />
                <textarea className={styles.textarea} placeholder="recipe" onChange={(e)=>{setMealData({...mealData, recipe: e.target.value})}} value={mealData.recipe}></textarea>
                <input type = "file" label = "Image" name = "myFile" accept = ".jpeg, .png, .jpg" onChange = {(e) => base64(e, setMealData, mealData)} className = {styles.base64}/>
                  { isEdit? (<button className={styles.editBtn} onClick={handleEdit}>Edit</button> ) : 
                   ( <button className={styles.addBtn} onClick={handleAdd}>Add New</button> )}
            </div>
        </div>

    )
}

export default NewMeal;