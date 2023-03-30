import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const gsapAnimate = (sec4Ref,leftSide, rightSide)=>{
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(leftSide.current, {
        left: "50%",
        x: "-50%",
        color: "#fff",
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
        x: "50%"
        // duration: 5,
  
    })

//     ScrollTrigger.create({
//         trigger: sec4Ref.current,
//         start: "top center",
//         end: "bottom center",
//         onEnter: ()=>{  sec4Ref.current.classList.add("action");
//         // rightSide.current.style.right = "50%";
//         // rightSide.current.style.transform = "translateX(50%)";

//     },
//         onLeave: ()=>{sec4Ref.current.classList.remove("action")},
//         onEnterBack: ()=>{sec4Ref.current.classList.add("action")},
//         onLeaveBack: ()=>{ sec4Ref.current.classList.remove("action")
//             // rightSide.current.style.right = "0";
//             // rightSide.current.style.transform = "translateX(0)";
        
//         },
        
//         // markers: true
//    })
}