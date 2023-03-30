import Section1 from "./Section1.js";
import Section2 from "./Section2/Section2.js";
import Section3 from "./Section3/Section3.js";
import Section4 from "./Section4/Section4.js";
import Section5 from "./Section5/Section5.js";
import Section6 from "./Section6/Section6.js";
import Section7 from "./Section7/Section7.js";

import "./css/simple.css";

const AboutUs = ({ closeChange }) => {

    closeChange?.remove("change");
    
    return (
        <div className="container" >
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            {/* <Section3 /> */}
        </div>
    )
}

export default AboutUs;