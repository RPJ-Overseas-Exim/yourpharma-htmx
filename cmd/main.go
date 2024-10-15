package main

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/handlers"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main(){
    e := echo.New()

    e.Static("/static", "assets")
    handlers.SetupRoutes(e, handlers.Home)

    e.Use(middleware.Logger())

    e.Logger.Fatal(e.Start(":1323"))
}
