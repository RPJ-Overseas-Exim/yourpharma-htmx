package handlers

import (
	"strconv"

	"github.com/labstack/echo/v4"
)

type handlerFunction func(echo.Context) error

func SetupRoutes(e *echo.Echo, homeHandler *HomeHandler, producthandler *ProductHandler, orderHandler *OrderHandler) error {
	e.GET("/", func(c echo.Context) error {
        return homeHandler.homePageHandler(c)
	})

    e.GET("/product/:productId", func(c echo.Context) error{
        return producthandler.singleProductHandler(c)
    })

    e.GET("/buy/:productId", func(c echo.Context) error {
        qty := c.QueryParam("price-qty")
        data, err := strconv.Atoi(qty)
        if err!= nil{
            panic(err)
        }
        return orderHandler.handleOrderForm(c, data)
    })

	return nil
}
