const projectCardsImage = document.querySelectorAll(".project-card img")

if (projectCardsImage) {
    projectCardsImage.forEach(cardImg => {
        cardImg.addEventListener("mouseenter", projectCardMouseOver)
        cardImg.addEventListener("touchstart", projectCardTouchIn)

        const viewId = `.${cardImg.id}-view-overlay`
        const view = document.querySelector(viewId)
        view.addEventListener("mouseleave", () => projectCardMouseOut(cardImg))
        view.addEventListener("touchend", () => projectCardMouseOut(cardImg))
    })
}

function projectCardMouseOver(e) {
    const cardImg = e.target
    cardImg.style.transform = "scale(1.25)"
    cardImg.style.filter = "blur(3px)"

    const view = document.querySelector(`.${e.target.id}-view-overlay`)
    if (view.classList.contains("hidden"))
        view.classList.remove("hidden")
}

function projectCardMouseOut(cardImg) {
    cardImg.style.transform = "scale(1)"
    cardImg.style.filter = "blur(0)"

    const view = document.querySelector(`.${cardImg.id}-view-overlay`)
    if (!view.classList.contains("hidden")) {
        view.classList.add("hidden")
    }
}

function projectCardTouchIn(e){
    const cardImg = e.target
    cardImg.style.transform = "scale(1.25)"

    const view = document.querySelector(`.${e.target.id}-view-overlay`)
    if (view.classList.contains("hidden"))
        view.classList.remove("hidden")
}
