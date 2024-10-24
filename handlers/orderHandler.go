package handlers

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/views"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/order"
	"github.com/labstack/echo/v4"
)

type OrderService interface {
	PostOrder(name, email, address, products string, qty, amt int) error
}

type OrderHandler struct {
	OrderService   OrderService
	ProductService ProductService
}

func NewOrderHandler(ordSer OrderService, ps ProductService) *OrderHandler {
	return &OrderHandler{
		ordSer,
		ps,
	}
}

func (oh *OrderHandler) handleOrderForm(c echo.Context, qty int) error {
	if qty != 180 && qty != 90 {
		return renderTempl(c, 400, views.NotFound())
	}
    data, error := oh.ProductService.GetProduct(c.Param("productId"))
    if error !=nil {
        panic(error)
    }
	comp := order.OrderForm(data.Name, qty)
	return renderTempl(c, 200, comp)
}
