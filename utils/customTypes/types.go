package customTypes

import (
	"fmt"
	"html/template"
	"io"

	"github.com/labstack/echo/v4"
)

type Template struct {
	Templates *template.Template
}

func (t *Template) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.Templates.ExecuteTemplate(w, name, data)
}

type PriceQty struct {
	Price, Qty int
}

type Product struct {
	Id, Title string
	PriceQty  []PriceQty
}

func NewProduct(id, title string, price, qty int) *Product {
	return &Product{
		id,
		title,
		[]PriceQty{
			{price, qty},
		},
	}
}

type HttpException struct {
	Message string
}

func (httpException HttpException) Error() string {
	return fmt.Sprintf(httpException.Message)
}

type Order struct {
	Id,
	Name,
	Email,
	Address,
	Product string
	Quantity,
	Amount int
}

func NewOrder(id, name, email, address, products string, quantity, amount int) *Order {
	return &Order{id, name, email, address, products, quantity, amount}
}
