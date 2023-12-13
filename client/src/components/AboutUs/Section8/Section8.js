import style from "./css/sec8.module.css";
import { useEffect, useRef } from "react";
import "./css/simple.css";
import { AiFillCaretLeft } from "react-icons/ai";
import {  sliderLeft, sliderRight } from "./JS/plain";
import { gsap } from "gsap";



const Section2 = () => {
    
    const zoomImg = useRef();
    const handleEffects = useRef();
    const changeText = useRef();
    const sec8Ref = useRef();
    let leftArrow = useRef();
    let rightArrow = useRef();

    const handleLeft = () => { sliderLeft(leftArrow) };
    const handleRight = () => { sliderRight(rightArrow) };

    useEffect(() => {
        // const handleScroll = e => { makeOpacity(cover, zoomImg, handleEffects, changeText) }
        // window.addEventListener('scroll', handleScroll);
        const ctx = gsap.context((self) => {
            // console.log(zoomImg);
            // console.log(sec8Ref);
            let secondImg = self.selector(".img_2")[0];
            let img3 = self.selector(".img_1")[0];

             gsap.timeline({
                defaults: { ease: "none", duration: 2 },
                scrollTrigger: {
                    trigger: sec8Ref.current,
                    pin: true,
                    scrub: 0,
                    // start: () => "+=" + sec8Ref.current.offsetWidth * 3,
                    end: () => "+=" + sec8Ref.current.offsetWidth *3,
                    // markers: true
                }
            })
                .to(zoomImg.current, {
                    z: 0,
                    x: 0,
                    y: 0,
                    opacity: 0,
                    // duration: 5
                })
                
                .to(secondImg, {
                    opacity: 1,
                    // duration: 1
                })
                .to(changeText.current,{
                    yPercent: -100,
                    // duration: 5
                },"<")
                .to(secondImg, {
                    opacity: 0,
                })
                .to(img3, {
                    opacity: 1,
                })
        }, sec8Ref);
        return () => ctx.revert();
    }, []);

    return (
        <div className={style.section_2} ref={sec8Ref}>
            <div className={style.section_2wrapp} >
                {/* <div className={`${style.cover} cover`} ref={cover}>
                    <img src="../../../images/aboutUs/restaurant1.png" alt="cover" />
                </div> */}
                <div className={style.all}>
                    <div className={style.imageHolder} ref={handleEffects}>
                        <div className={`${style.imgWrapp} img_3`} ref={zoomImg}>
                            <img src="../../../images/aboutUs/restaurant.jpg" className={style.img} alt="" />
                        </div>
                        <div className={`${style.imgWrapp} img_2`}>
                            <img src="../../../images/aboutUs/restaurant3.jpg" className={style.img} alt="" />
                        </div>
                        <div className={`${style.imgWrapp} img_1`}>
                            <img src="../../../images/aboutUs/restaurant2.jpg" className={style.img} alt="" />
                        </div>
                        <div className={`${style.arrowLeft} arrowLeft arrows`} ref={leftArrow}>
                            <AiFillCaretLeft onClick={handleLeft} />
                        </div>
                        <div className={`${style.arrowRight} arrowRight arrows`} ref={rightArrow}>
                            <AiFillCaretLeft className={`${style.arrowRight}`} onClick={handleRight} />
                        </div>
                    </div>
                    <div className={style.textHolder} >
                        <div className={style.textWrapp} ref={changeText}>
                            <p className={`${style.text} pasus1`}>Chef, restaurateur, New York Times Best Selling author and Emmy Award-winning TV host, Guy Fieri, is one of the world’s most recognizable and influential culinary stars.  In 2019, Guy received a star on the celebrated Hollywood Walk Fame, a rare feat for a chef. </p>&nbsp;
                            <p className={`${style.text} pasus2`}>Guy began his love affair with food at the age of ten, selling soft pretzels from a three-wheeled bicycle cart he built with his father called “The Awesome Pretzel Cart.”  After selling pretzels and washing dishes for six years, Guy earned enough money to pursue his dream of studying abroad in Chantilly, France, where he gained a profound appreciation for international cuisines and further strengthened his passion for food.  He returned to the US and graduated from the University of Nevada Las Vegas with a degree in Hospitality Management.  Upon his graduation, Guy jumped headfirst into the restaurant business, ultimately opening his own casual dining concepts in Northern California. In 2006, Guy won Food Network’s popular television competition show, “Next Food Network Star” and was awarded his own series, the Emmy nominated “Guy’s Big Bite.”  Since that time, Guy has taken food television by storm as host of top-rated TV shows including the iconic, Emmy-nominated “Diners, Drive Ins & Dives,” “Guy’s Grocery Games,” “Tournament of Champtions" and “Guy’s Ranch Kitchen.”</p><br />
                            <p className={`${style.text} pasus3`}>Additionally, Guy and his team at Knuckle Sandwich, LLC, have created a thriving food and beverage empire.  He recently launched Flavortown Kitchen, a 175 location virtual brand to complement his 80 plus scratch kitchen restaurant concepts worldwide. In addition, he’s partnered with legendary rocker  and spirits pioneer, Sammy Hagar in Santo Tequila.  On land and at sea, from the Las Vegas Strip to the Atlantic City Boardwalk, from South Africa to Colombia and from Costa Rica to Dubai, Guys culinary and spirits creations are enjoyed globally, every day.</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Section2;