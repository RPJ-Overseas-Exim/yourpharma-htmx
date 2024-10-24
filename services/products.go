package services

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"gorm.io/gorm"
)

type ProductService struct{
    dbConn *gorm.DB
}

func NewProductService(dbConn *gorm.DB) *ProductService{
    return &ProductService{
        dbConn,
    }
}

func (ps *ProductService) GetProducts() ([]*models.Product, error){
    var products []*models.Product
    err := ps.dbConn.Find(&products).Error
    return products, err
}

func (ps *ProductService) PostProduct(product *models.Product)error{
    return nil
}

func (ps *ProductService) GetProduct(productId string) (*models.Product, error){
    var product *models.Product

    err := ps.dbConn.Joins("INNER JOIN price_qties on price_qties.product_id=products.id").Preload("PriceQty").Group("products.id").First(&product, "products.id = ?", productId).Error

    return product, err
}
