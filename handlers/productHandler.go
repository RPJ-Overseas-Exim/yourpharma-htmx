package handlers

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/utils/customTypes"
	product_views "github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/product"
	"github.com/labstack/echo/v4"
)

type ProductService interface{
    GetProducts() ([]*customTypes.Product, error);
    GetProduct(productId string) (*customTypes.Product, error);
    PostProduct(*customTypes.Product) error;
}

type ProductHandler struct {
    ProductService ProductService
}

func NewProductHandler (ps ProductService) *ProductHandler{
    return &ProductHandler{
        ProductService: ps,
    }
}

func (ph *ProductHandler)  singleProductHandler(c echo.Context) error {
    productId := c.Param("productId")
    data,err := ph.ProductService.GetProduct(productId)
    if err!=nil {
        panic(err)
    }
    comp := product_views.Product(data)
    return renderTempl(c, 200, comp)
}
