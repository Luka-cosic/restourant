import Menu from "./Menu/Menu";
import Templates from "./Templates/Templates";
import "./home.css";

function Home ({closeChange}){
    closeChange?.remove("change");
    
    
    return(
        <div className="home">
            <Menu />
            <Templates />
        </div>
    )
}

export default Home;