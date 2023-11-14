import Menu from "./Menu/Menu";
import Templates from "./Templates/Templates";
import "./home.css";
import { useEffect } from "react";
import {io} from 'socket.io-client';

function Home ({closeChange}){
    closeChange?.remove("change");


    useEffect(()=>{
        const socket = io('http://localhost:5000')
        socket.on('connect', ()=>console.log(socket.id))
        
      //  socket.on('time', (data)=>setTime(data))
      //  socket.on('disconnect',()=>setTime('server disconnected'))
     
     },[])
    return(
        <div className="home">
            <Menu />
            <Templates />
        </div>
    )
}

export default Home;