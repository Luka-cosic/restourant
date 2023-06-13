export const handleRight = (wrapperRef, getSrc, setGetSrc)=>{
    const nextImg = ()=>{
        if(getSrc === 20){ setGetSrc(1); return }
        setGetSrc(Number(getSrc) + 1);
    }

    wrapperRef.current.classList.add("moveLeft");
        setTimeout(()=>{
            nextImg();
        },300)
        setTimeout(()=>{
            wrapperRef.current.classList.remove("moveLeft");  
        },600)  
}

export const handleLeft = (wrapperRef, getSrc, setGetSrc)=>{
    const prevImg = ()=>{
        if(getSrc == 1){ setGetSrc(19); return }
        setGetSrc(Number(getSrc) - 1);
    }
    
    wrapperRef.current.classList.add("moveRight");
    setTimeout(()=>{
        prevImg();
    },300)
    setTimeout(()=>{
        wrapperRef.current.classList.remove("moveRight");  
    },600) 
}