const orderForm = document.querySelector("#order-form__container")
const orderFormPrevBtns = document.querySelectorAll(".prev-submit")
const orderFormNextBtns = document.querySelectorAll(".next-submit")
const contactForm = document.querySelector("#contact-form")
const paymentForm = document.querySelector("#payment-form")

function preventDefault(e) {
    e.preventDefault()
}

function initialize() {
    contactForm.addEventListener("submit", preventDefault)
    paymentForm.addEventListener("submit", preventDefault)

    const handleOrderPrevPage = (e) => {
        e.preventDefault()
        const submitBtn = e.target
        const page = Number(submitBtn.getAttribute("data-page"))

        if (page <= 0) return
        orderForm.style.transform = `translateX(-${(page - 1) * 100}%)`
    }

    const handleOrderNextPage = (e) => {
        e.preventDefault()
        const submitBtn = e.target
        const page = Number(submitBtn.getAttribute("data-page"))

        if (page >= 2) return
        orderForm.style.transform = `translateX(-${(page + 1) * 100}%)`
    }

    orderFormNextBtns.forEach(btn => {
        btn.addEventListener("click", handleOrderNextPage)
    })

    orderFormPrevBtns.forEach(btn => {
        btn.addEventListener("click", handleOrderPrevPage)
    })
}
if(contactForm){
    initialize()
}
