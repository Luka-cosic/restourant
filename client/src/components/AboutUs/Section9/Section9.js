import styles from "./css/sec9.module.css"
import screen from "./images/laptop-screen.png";
import table from "./images/laptop-table.png";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import GoogleMapReact from 'google-map-react';


const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Section9 = () => {

    const contRef = useRef();
    const screenRef = useRef();

    const defaultProps = {
        center: {
            lat: 40.567989,
            lng: 30.73531
        },
        zoom: 5
    };

    useEffect(() => {

        let ctx = gsap.context(() => {
            gsap.to(screenRef.current, {
                rotateX: 0,
                scrollTrigger: {
                    trigger: contRef.current,
                    start: "50% center",
                    end: "30% center",
                    // markers: true,
                    onEnter: () => screenRef.current.style.transform= "rotateX(0)"
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
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: "" }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={10.99835602}
                                lng={77.01502627}
                                text="My Marker"
                            />
                        </GoogleMapReact>
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