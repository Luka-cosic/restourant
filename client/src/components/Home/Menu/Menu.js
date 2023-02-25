import "./menu.css";
import MakeSlider from "./menuJava";
function Menu() {
    
    return (
        <div className="menu">
            <h4 className="menuEnter" onClick={(e)=>{MakeSlider.firstImage()}}>ABOUT US</h4>
            <h4 className="menuEnter" onClick={(e)=>{MakeSlider.secondImage()}}>FOOD</h4>
            <h4 className="menuEnter" onClick={(e)=>{MakeSlider.thirdImage()}}>MENU 3</h4>
            <h4 className="menuEnter" onClick={(e)=>{MakeSlider.fourthImage()}}>MENU 4</h4>
        </div>
    )
}

export default Menu;