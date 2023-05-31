export const makeOpacity = (cover, zoomImg, handleEffects, changeText)=>{
    if (document.documentElement.scrollTop > 100) {
        cover.current.classList.add("change")
    }
    if (document.documentElement.scrollTop > document.documentElement.offsetHeight) {
        zoomImg.current.style.transform = `translateX(0) translateY(0) translateZ(0)`;
        handleEffects.current.classList.add("change");
        changeText.current.classList.add("change");
        setTimeout(function () {handleEffects.current.classList.add("afterAll");},4000)
    }  
};

let counter1 = 0;
export const sliderLeft = (leftArrow)=>{
    counter1++;
    document.querySelector(".arrowRight").style.display = "block";
    document.querySelector(`.img_${counter1}`).style.left = "50rem";
    if (counter1 === 2) {  leftArrow.current.style.display = "none"; }
}

export const sliderRight = (rightArrow)=>{
    document.querySelector(".arrowLeft").style.display = "block";
    document.querySelector(`.img_${counter1}`).style.left = "0";
    counter1--;
    if (counter1 === 0) { 
        rightArrow.current.style.display = "none";    
 }
}
