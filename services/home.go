package services

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"gorm.io/gorm"
)

type HomeService struct{
    dbConn *gorm.DB
}

func NewHomeService(dbConn *gorm.DB) *HomeService{
    return &HomeService{
        dbConn,
    }
}

func (hs *HomeService) GetFeaturedProducts () ([]*models.Product, error) {
    var products []*models.Product

    err := hs.dbConn.Joins("INNER JOIN price_qties on price_qties.product_id=products.id").Group("products.id").Preload("PriceQty").Find(&products).Error
    if err!=nil{
        panic(err)
    }

    return products, nil
}

