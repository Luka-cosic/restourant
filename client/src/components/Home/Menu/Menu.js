import "./menu.css";
import MakeSlider from "./menuJava";
function Menu() {
    
    return (
        <div className="menu">
            <h4 className="menuEnter" onClick={(e)=>{MakeSlider.firstImage()}}>ABOUT US</h4>
            <h4 className="menuEnter" onClick={(e)=>{MakeSlider.secondImage()}}>FOOD</h4>
            <h4 className="menuEnter" onClick={(e)=>{MakeSlider.thirdImage()}}>PHOTOS</h4>
            <h4 className="menuEnter" onClick={(e)=>{MakeSlider.fourthImage()}}>BOOK</h4>
        </div>
    )
}

export default Menu;