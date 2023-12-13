import styles from "./css/sec9.module.css"
import screen from "./images/laptop-screen.png";
import table from "./images/laptop-table.png";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

import { GoogleMap,useLoadScript, Marker  } from "@react-google-maps/api";
import { useMemo } from "react";


const libraries = ['places'];

const Section9 = () => {
    
    
    const center = useMemo(() => ({ lat: 44.2782847, lng: 19.8818699 }), []);
    const contRef = useRef();
    const screenRef = useRef();
    const [marker, setMarker] = useState(false);

    setTimeout(()=>{
        setMarker(true)
    },2000);

   const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_API_KEY,
        libraries
    });
   

    useEffect(() => {
       
        let ctx = gsap.context(() => {
            gsap.to(screenRef.current, {
                rotateX: 0,
                scrollTrigger: {
                    trigger: contRef.current,
                    start: "50% center",
                    end: "30% center",
                   
                    onEnter: () => screenRef.current.style.transform = "rotateX(0)"
                    // onEnterBack: () => screenRef.current.style.transform= "rotateX(-88deg)"
                }
            })
        }, contRef);

        return () => ctx.revert();
    }, [])
    return (
        <div className={styles.container} ref={contRef}>
            <div className={styles.imgHolder}>
                <div className={styles.screenWrapper} ref={screenRef}>
                    <div className={styles.map}>
                        {!isLoaded ? (
                            <h1>Loading...</h1>
                        ) : (
                            <GoogleMap
                                mapContainerClassName={styles.mapContainer}
                                center={center}
                                zoom={13}
                            >
                                {marker && <Marker position={{ lat: 44.2782847, lng: 19.8818699 }} />}
                            </GoogleMap>

                        )}
                       
                    </div>
                    <img className={styles.screenImg} src={screen} alt="" />
                </div>
                <div className={styles.tableWrapper}>
                    <img className={styles.tableImg} src={table} alt="" />
                </div>
            </div>

        </div>
    )
}

export default Section9;