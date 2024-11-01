const projectCardsImage = document.querySelectorAll(".project-card img")
const buyNowBtns = document.querySelectorAll(".buy-now-btn")
const buyNowCloseBtns = document.querySelectorAll(".buy-now-close-btn")
const dialogBackgrounds = document.querySelectorAll(".dialog-background")


if (buyNowBtns) {
    buyNowBtns.forEach(btn => {
        btn.addEventListener("click", () => openDialog("#" + btn.getAttribute("dialog-id")))
    })
    buyNowCloseBtns.forEach(btn => {
        btn.addEventListener("click", () => closeDialog("#" + btn.getAttribute("dialog-id")))
    })

}

if (dialogBackgrounds) {
    dialogBackgrounds.forEach(dialogBg => dialogBg.addEventListener("click", () => closeDialog("#" + dialogBg.getAttribute("dialog-id"))))
}

if (projectCardsImage) {
    projectCardsImage.forEach(cardImg => {
        cardImg.addEventListener("mouseenter", projectCardMouseOver)

        cardImg.addEventListener("touchstart", projectCardTouchIn)
        cardImg.addEventListener("touchend", () => projectCardMouseOut(cardImg))

        const viewId = `.img-view-overlay-${cardImg.id.replace("img-", "")}`
        const view = document.querySelector(viewId)
        view.addEventListener("mouseleave", () => projectCardMouseOut(cardImg))
    })
}

export function closeDialog(dialogId) {
    const dialog = document.querySelector(dialogId)
    if (!dialog) {
        console.log("Dialog couldn't be found for the given id")
        return
    }
    dialog.classList.add("hidden")
}

export function openDialog(dialogId) {
    const dialog = document.querySelector(dialogId)
    if (!dialog) {
        console.log("Dialog couldn't be found for the given id")
        return
    }
    dialog.classList.remove("hidden")
}

function projectCardMouseOver(e) {
    const cardImg = e.target
    cardImg.style.transform = "scale(1.25)"

    const view = document.querySelector(`.img-view-overlay-${e.target.id.replace("img-", "")}`)
    if (view.classList.contains("hidden")){
        view.style.backdropFilter = "blur(3px)"
        view.classList.remove("hidden")
    }
}

function projectCardMouseOut(cardImg) {
    cardImg.style.transform = "scale(1)"

    const view = document.querySelector(`.img-view-overlay-${cardImg.id.replace("img-", "")}`)

    if (!view.classList.contains("hidden")) {
        view.style = ""
        view.classList.add("hidden")
    }
}

function projectCardTouchIn(e) {
    const cardImg = e.target
    cardImg.style.transform = "scale(1.25)"
}

