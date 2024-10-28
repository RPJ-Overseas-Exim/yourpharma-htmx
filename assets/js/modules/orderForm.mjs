const orderForm = document.querySelector("#order-form__container")
const orderFormPrevBtns = document.querySelectorAll(".prev-submit")
const orderFormNextBtns = document.querySelectorAll(".next-submit")
const contactForm = document.querySelector("#contact-form")
const formError = document.querySelector(".order-form__error")
const summaryFormSubmit = document.querySelector("#summary-form__submit")

function initialize() {

    const handleOrderPrevPage = (e) => {
        e.preventDefault()
        const submitBtn = e.target
        const page = Number(submitBtn.getAttribute("data-page"))

        if (page <= 0) return
        orderForm.style.transform = `translateX(-${(page - 1) * 100}%)`
    }

    const handleOrderNextPage = (e) => {
        e.preventDefault()
        const contactFormData = new FormData(contactForm)
        const submitBtn = e.target
        const page = Number(submitBtn.getAttribute("data-page"))

        if (page === 0) {
            const name = contactFormData.get("name")
            const email = contactFormData.get("email")
            const number = contactFormData.get("mobile-number")

            if (!name) {
                formError.textContent = "Name is not provided"
                return
            }

            if (!email || !email.match(/[^[^@]+@[^@]+\.[^@]+$/)) {
                formError.textContent = "Valid email is not provided"
                return
            }
            if (number !== "" && number.length !== 10 || isNaN(Number(number))) {
                formError.textContent = "Valid number is not provided"
                return
            }
            
            formError.textContent = ""
            for(const [label, value] of contactFormData.entries()){
                const summaryField  = document.querySelector("#" + label + "-summary")
                if(summaryField){
                    const summaryValue = value? value :"Not provided"
                    summaryField.textContent  = `${summaryValue}`
                }
            }
        }

        if (page >= 2) return
        orderForm.style.transform = `translateX(-${(page + 1) * 100}%)`
    }

    orderFormNextBtns.forEach(btn => {
        btn.addEventListener("click", handleOrderNextPage)
    })

    orderFormPrevBtns.forEach(btn => {
        btn.addEventListener("click", handleOrderPrevPage)
    })

    summaryFormSubmit.addEventListener("click", (e)=>{
        e.preventDefault()
        const page = Number(summaryFormSubmit.getAttribute("data-page"))
        orderForm.style.transform = `translateX(-${(page + 1) * 100}%)`
    })

}

if (orderForm) {
    initialize()
}
