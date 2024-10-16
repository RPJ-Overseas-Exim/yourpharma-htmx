package handlers

import (
	"github.com/labstack/echo/v4"
)

type handlerFunction func(echo.Context) error

func SetupRoutes(e *echo.Echo, homeHandler handlerFunction, producthandler ProductHandler) error {
	e.GET("/", func(c echo.Context) error {
		return homeHandler(c)
	})


	return nil
}
