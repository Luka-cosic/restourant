import "./templates.css";
import { useNavigate } from "react-router-dom";

function Templates() {
    const navigate = useNavigate();
    
    return (
        <div className="templates">
            <div className="template_1 template change4">
                <div className="aboutUsTextWrapp">
                    <h1 className="aboutUsHeading">About us</h1>
                    <p className="aboutUsText">We challenge convention and push technology to the edge of possibility. Welcome to Rimac. This is our story.</p>
                    <div className="aboutUsBtnWrapp" onClick={()=>{navigate("/aboutUs")}}>
                        <div className="btnEfect"></div>
                        <button className="aboutUsBtn">EXPLORE</button>
                    </div>
                </div>
                <img src="./images/menu/aboutUs.webp" className="tempImg" alt="" />
            </div>

            <div className="template_2 template change1">
            <div className="aboutUsTextWrapp">
                    <h1 className="aboutUsHeading">FOOD</h1>
                    <p className="aboutUsText">See recipes, like and comment on food with other visitors</p>
                    <div className="aboutUsBtnWrapp" onClick={()=>{navigate("/food")}}>
                        <div className="btnEfect"></div>
                        <button className="aboutUsBtn">EXPLORE</button>
                    </div>
                </div>
                <img src="./images/slika2.jpg" className="tempImg" alt="" />
            </div>

            <div className="template_3 template change2">
                <img src="./images/slika4.jpg" className="tempImg" alt="" />
            </div>
            
            <div className="template_4 template change3">
                <img src="./images/slika5.jpg" className="tempImg" alt="" />
            </div>

        </div>
    )
}

export default Templates;