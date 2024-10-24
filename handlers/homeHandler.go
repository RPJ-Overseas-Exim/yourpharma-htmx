package handlers

import (
	"net/http"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/home"
	"github.com/a-h/templ"
	"github.com/labstack/echo/v4"
)

func renderTempl(ctx echo.Context, status int, t templ.Component) error {

    ctx.Response().Header().Set(echo.HeaderContentType, echo.MIMETextHTML)

	ctx.Response().WriteHeader(status)
	err := t.Render(ctx.Request().Context(), ctx.Response().Writer)

	if err != nil {
		return ctx.String(http.StatusInternalServerError, "failed to render response template")
	}

	return nil
}

type HomeService interface{
    GetFeaturedProducts() ([]*models.Product, error)
}

type HomeHandler struct{
    HomeService HomeService
}

func NewHomeHandler(hs HomeService) *HomeHandler {
    return &HomeHandler{
        hs,
    }
}

func (homeHandler *HomeHandler)homePageHandler(c echo.Context) error {
	homeData, err := homeHandler.HomeService.GetFeaturedProducts()
    if err!=nil{
        panic(err)
    }

    homeCmp :=home_views.Home(homeData)
	cmp := home_views.HomeIndex("Home", homeCmp)
	return renderTempl(c, 200, cmp)
}
