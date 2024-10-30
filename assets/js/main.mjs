import "./modules/home.mjs"
import "./modules/orderForm.mjs"

const themeSwitches = document.querySelectorAll(".theme-switch")

if(themeSwitches.length>0){
    const theme = localStorage.getItem("theme")
    const bodyClassList = document.body.classList
    if(theme==="light"){
        bodyClassList.remove("dark")
    }else{
        bodyClassList.add("dark")
    }

    themeSwitches.forEach(themeSwitch=>{
        themeSwitch.addEventListener("click", ()=>{

            if(bodyClassList.contains("dark")){
                localStorage.setItem("theme", "light")
            }else{
                localStorage.setItem("theme", "dark")
            }

            bodyClassList.toggle("dark")
        })
    })
}
