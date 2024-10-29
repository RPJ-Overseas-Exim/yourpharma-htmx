package handlers

import (
	"log"
	"strconv"

	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/utils"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/views"
	components_order "github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/components/order"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/order"
	"github.com/labstack/echo/v4"
)

type OrderService interface {
	PostOrder(customerId, products string, qty, amt int) error
	GetAmount(productId string, qty int) (int, error)
}

type CustomerService interface {
    PostCustomer(id, name, email string, number *int, address *string) error
}

type OrderHandler struct {
	OrderService   OrderService
    CustomerService CustomerService
	ProductService ProductService
}

func NewOrderHandler(ordSer OrderService, cs CustomerService, ps ProductService) *OrderHandler {
	return &OrderHandler{
		ordSer,
        cs,
		ps,
	}
}

func (oh *OrderHandler) handleOrderForm(c echo.Context, qty int) error {
	if qty != 180 && qty != 90 {
		return renderTempl(c, 400, views.NotFound())
	}
	data, error := oh.ProductService.GetProduct(c.Param("productId"))
	if error != nil {
		panic(error)
	}
	comp := order.OrderForm(data.Name, data.Id, qty)
	return renderTempl(c, 200, comp)
}

func (oh *OrderHandler) handleOrderFormPost(c echo.Context) error {

	name := c.FormValue("name")
	email := c.FormValue("email")
    num,_ := strconv.Atoi(c.FormValue("number"))
    number  := &num
    

	address := c.FormValue("address")
	paymentMethod := c.FormValue("payment-method")
	qty, qtyErr := strconv.Atoi(c.QueryParam("price-qty"))
	productId := c.Param("productId")

	comp := components_order.ConfirmedOrderPage(true)

	if qtyErr != nil || name == "" || email == "" || paymentMethod == "" || productId == "" {
        log.Println("All fields not provided")
		return renderTempl(c, 400, comp)
	}

	amount, amountErr := oh.OrderService.GetAmount(productId, qty)


    customerId := db.GenerateNanoid()

    customerErr := oh.CustomerService.PostCustomer(customerId, name, email, number, &address)
    orderErr := oh.OrderService.PostOrder(customerId, productId, qty, amount)

    utils.HandleError(amountErr, "No amount found for the given quantity")
    utils.HandleError(customerErr, "Customer could not be created")
    utils.HandleError(orderErr, "Order couldn't be created")


	comp = components_order.ConfirmedOrderPage(true)
	return renderTempl(c, 200, comp)
}
