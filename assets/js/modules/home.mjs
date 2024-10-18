
const projectCardsImage = document.querySelectorAll(".project-card img")

if (projectCardsImage) {
    projectCardsImage.forEach(cardImg => {
        cardImg.addEventListener("mouseenter", projectCardMouseOver)
        cardImg.addEventListener("touchstart", projectCardMouseOver)

        const viewId = `.${cardImg.id}-view-overlay`
        const view = document.querySelector(viewId)
        view.addEventListener("mouseleave", (e) => projectCardMouseOut(e, cardImg))
        view.addEventListener("touchend", (e) => projectCardMouseOut(e, cardImg))
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

function projectCardMouseOut(e, cardImg) {
    cardImg.style.transform = "scale(1)"
    cardImg.style.filter = "blur(0)"

    const view = e.target
    if (!view.classList.contains("hidden")) {
        view.classList.add("hidden")
    }
}
