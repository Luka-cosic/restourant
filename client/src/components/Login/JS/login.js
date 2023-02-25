
export const focus = (e)=>{
    var label = document.getElementsByClassName("inputWrapp");
    e.currentTarget.firstChild.nextSibling.focus();
    Array.from(label).forEach((el)=>{
        if(el.firstChild.nextSibling.value === ""){
            el.classList.remove("changeL") 
        }
          
    })
    e.currentTarget.classList.add("changeL")
};


export const saveUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data))
}

export const getUser = () => {
   return JSON.parse(localStorage.getItem("user"));
}

export const logout = () => {
    localStorage.removeItem("user");
}