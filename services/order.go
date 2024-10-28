package services

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"gorm.io/gorm"
)

type OrderService struct {
	dbConn *gorm.DB
}

func NewOrderService(dbConn *gorm.DB) *OrderService {
	return &OrderService{
		dbConn,
	}
}

func (ordSer *OrderService) PostOrder(customerId, product string, qty, amt int) error {
	order := models.NewOrder(db.GenerateNanoid(), customerId, product, qty, amt)
	err := ordSer.dbConn.Create(&order).Error
	return err
}

func (ordSer *OrderService) GetAmount(productId string, qty int) (int, error) {
	var priceQty models.PriceQty

    err := ordSer.dbConn.First(&priceQty, "product_id = ? AND qty= ?", productId, qty).Error

	if err != nil {
		return 0, err
	}
    return int(priceQty.Price), err
}
