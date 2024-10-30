import "./modules/home.mjs"
import "./modules/orderForm.mjs"

const themeSwitches = document.querySelectorAll(".theme-switch")

if(themeSwitches.length>0){
    themeSwitches.forEach(themeSwitch=>{
        themeSwitch.addEventListener("click", ()=>{
            document.body.classList.toggle("dark")
        })
    })
}
