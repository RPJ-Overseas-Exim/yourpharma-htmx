package handlers

import (
	"strconv"

	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/views"
	"github.com/labstack/echo/v4"
)

type handlerFunction func(echo.Context) error

func SetupRoutes(e *echo.Echo, homeHandler *HomeHandler, producthandler *ProductHandler, orderHandler *OrderHandler) error {
    e.GET("*", func(c echo.Context) error {
        return Render404(c)
    })

	e.GET("/", func(c echo.Context) error {
        return homeHandler.homePageHandler(c)
	})

    e.GET("/products", func(c echo.Context) error {
        return producthandler.handleAllProducts(c)
    })

    e.GET("/product/:productId", func(c echo.Context) error{
        return producthandler.singleProductHandler(c)
    })

    e.GET("/buy/:productId", func(c echo.Context) error {
        qty := c.QueryParam("price-qty")
        data, err := strconv.Atoi(qty)

        if err!= nil{
            renderTempl(c, 404, views.NotFound())
            return err
        }

        return orderHandler.handleOrderForm(c, data)
    })
    
    e.POST("/order/:productId", func(c echo.Context) error {
        return orderHandler.handleOrderFormPost(c)
    })
    
    e.GET("/privacy", func(c echo.Context) error {
        return RenderPrivacyPolicy(c)
    })
    
    e.GET("/terms", func(c echo.Context) error {
        return RenderTermsAndConditions(c)
    })

	return nil
}
