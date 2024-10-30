package handlers

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/utils"
	product_views "github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/product"
	products_views "github.com/RPJ-Overseas-Exim/yourpharma-htmx/views/products"
	"github.com/labstack/echo/v4"
)

type ProductService interface{
    GetProducts() ([]*models.Product, error);
    GetProduct(productId string) (*models.Product, error);
    GetFeaturedProducts() ([]*models.Product, error);
    PostProduct(*models.Product) error;
}

type ProductHandler struct {
    ProductService ProductService
}

func NewProductHandler (ps ProductService) *ProductHandler{
    return &ProductHandler{
        ProductService: ps,
    }
}

func (ph *ProductHandler) handleAllProducts(c echo.Context) error {
    products, err := ph.ProductService.GetProducts()
    utils.HandleError(err, "Error while fetching all products.")
    comp := products_views.AllProducts(products)
    return renderTempl(c, 200, comp)
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
