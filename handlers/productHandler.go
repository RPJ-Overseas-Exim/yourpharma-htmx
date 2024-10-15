package handlers

import (
	product_views "github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/product"
	"github.com/labstack/echo/v4"
)

func ProductHandler(c echo.Context) error {
    comp := product_views.Product()
    return renderTempl(c, 200, comp)
}
