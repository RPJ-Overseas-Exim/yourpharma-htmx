package main

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/handlers"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/services"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	e := echo.New()

	// setup temp data
	services.Main()

	e.Static("/static", "assets")
    dbConn := db.InitializeDB()

	ps := services.NewProductService(dbConn)
	handlers.SetupRoutes(e,
        handlers.NewHomeHandler(ps),
		handlers.NewProductHandler(ps),
		handlers.NewOrderHandler(services.NewOrderService(dbConn), services.NewCustomerService(dbConn), ps),
	)

	e.Use(middleware.Logger())

	e.Logger.Fatal(e.Start(":1323"))
}
