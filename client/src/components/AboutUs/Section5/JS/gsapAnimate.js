import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const gsapAnimate = (sec4Ref,leftSide, rightSide)=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(leftSide.current, {
        left: "50%",
        x: "-50%",
        
        // duration: 5,
        scrollTrigger:{
            trigger: leftSide.current,
            start: "top center",
            end: "center center",
            scrub: 1
            
        }
    })
    gsap.to(rightSide.current, {
        scrollTrigger:{
            trigger: leftSide.current,
            start: "top center",
            end: "center center",
            scrub: 1
            
        },
        right: "50%",
        x: "50%",
        color: "#fff"
        // duration: 5,
  
    })

//     ScrollTrigger.create({
//         trigger: sec4Ref.current,
//         start: "top center",
//         end: "bottom center",
//         onEnter: ()=>{ sec4Ref.current.classList.add("animate");
//         // leftSide.current.style.left = "50%";
//         // leftSide.current.style.transform = "translateX(-50%)";
    
//     },
//         onLeave: ()=>{sec4Ref.current.classList.remove("animate")},
//         onEnterBack: ()=>{sec4Ref.current.classList.add("animate")},
//         onLeaveBack: ()=>{sec4Ref.current.classList.remove("animate")
//             // leftSide.current.style.left = "0";
//             // leftSide.current.style.transform = "translateX(0)";
    
//     },
        
//         markers: true
//    })
}