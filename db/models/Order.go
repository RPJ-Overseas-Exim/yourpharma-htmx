package models

import (
	"time"
)

type Order struct {
	Id,
    CustomerId string `gorm:"uniqueIndex:idx_uniqueOrder"`
    ProductId string `gorm:"uniqueIndex:idx_uniqueOrder"`
	Quantity int `gorm:"uniqueIndex:idx_uniqueOrder"`
	Amount int 
    Status string `gorm:"uniqueIndex:idx_uniqueOrder"`
    Origin string 
    CreatedAt,
    UpdatedAt time.Time
}

func NewOrder(id, customerId, productId string, quantity, amount int) *Order{
    return &Order{
        Id: id,
        CustomerId: customerId,
        ProductId: productId,
        Quantity: quantity,
        Amount: amount,
        Status: "Active",
        Origin: "Website",
        CreatedAt: time.Now(),
        UpdatedAt: time.Now(),
    }
}

// type status string
//
// const (
// 	newOrder  status = "new"
// 	paid status = "paid"
// 	completed = "completed"
// )
//
// func (p *status) Scan(value interface{}) error {
// 	*p = status(value.([]byte))
// 	return nil
// }
//
// func (p status) Value() (driver.Value, error) {
// 	return string(p), nil
// }
//
// func (Order) TableName() string {
// 	return "order"
// }
//
