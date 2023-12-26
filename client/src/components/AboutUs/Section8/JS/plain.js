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


