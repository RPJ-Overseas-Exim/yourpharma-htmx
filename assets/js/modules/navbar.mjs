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

const navSidebar = document.querySelector(".nav-sidebar-menu")
const navSidebarBG = document.querySelector(".nav-sidebar-bg")
const navSidebarClose = document.querySelector(".nav-sidebar-close")
const navMenuTrigger = document.querySelector(".nav-sidebar-trigger")

if(navSidebar){
    navSidebarBG.addEventListener("click", closeNavSidebar)
    navSidebarClose.addEventListener("click", closeNavSidebar)
    navMenuTrigger.addEventListener("click", openNavSidebar)
}

function closeNavSidebar (){
    navSidebar.classList.remove("nav-sidebar-menu-open")
    document.body.classList.remove("modal-open")
}

function openNavSidebar(){
    navSidebar.classList.add("nav-sidebar-menu-open")
    document.body.classList.add("modal-open")
}

