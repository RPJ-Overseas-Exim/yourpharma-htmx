package handlers

import (
	"net/http"

	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/components"
	"github.com/a-h/templ"
	"github.com/labstack/echo/v4"
)

func renderTempl(ctx echo.Context, status int, t templ.Component) error {
	ctx.Response().WriteHeader(status)

	err := t.Render(ctx.Request().Context(), ctx.Response().Writer)
	if err != nil {
		return ctx.String(http.StatusInternalServerError, "failed to render response template")
	}

	return nil
}


func Home(c echo.Context) error{
    comp := home_views.Hello("Muzmamil")
    return renderTempl(c, 200, comp)
}
