 export const addClass = (e, sec2Ref)=>{
        if(e.target.documentElement.scrollTop > 200){
            sec2Ref.current.classList.add("sec2Change")
        }
    
}