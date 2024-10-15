package handlers

import (
	"github.com/labstack/echo/v4"
)

type handlerFunction func(echo.Context) error

func SetupRoutes(e *echo.Echo, homeHandler handlerFunction) error {
	e.GET("/", func(c echo.Context) error {
		return homeHandler(c)
	})

    e.GET("/product", func(c echo.Context) error {
        return ProductHandler(c)
    })

	return nil
}
