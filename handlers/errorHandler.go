package handlers

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/views"
	"github.com/labstack/echo/v4"
)

func Render404(c echo.Context) error{
    return renderTempl(c, 404, views.NotFound() )
}
