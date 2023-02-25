import Section1 from "./Section1.js";
import Section2 from "./Section2.js";
import "./css/simple.css";


const AboutUs = ({ closeChange }) => {

    closeChange?.remove("change");
    
    return (
        <div className="container" >
            <Section1 />
            <Section2 />
        </div>
    )
}

export default AboutUs;