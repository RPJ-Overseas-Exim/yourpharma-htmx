package models

import (
	"time"

	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/utils/customTypes"
)

type Product struct {
	Id string
    Name string `gorm:"uniqueIndex"`
	PriceQty []PriceQty `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
    Order []Order `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
    CreatedAt,
    UpdatedAt time.Time
}

type PriceQty struct {
    Id,
    ProductId string  
	Price, Qty int16
}

func NewPriceQty(prodId string, id []string,price, qty []int16) (*[]PriceQty, error){
	var priceQty []PriceQty
    if len(price) != len(qty){
        return &priceQty, customTypes.CustomException{Message:"Error while creating Price Qty: unequal length"}
    }
	for i := range price {
        priceQty = append(priceQty, PriceQty{Id: id[i],ProductId:prodId, Price: price[i], Qty: qty[i]})
	}
    return &priceQty,nil
}

func NewProduct(id, name string, priceQty *[]PriceQty) *Product {
	return &Product{
		Id:       id,
		Name:     name,
		PriceQty: *priceQty,
	}
}
