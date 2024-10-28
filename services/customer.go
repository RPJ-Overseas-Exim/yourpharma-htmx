package services

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"gorm.io/gorm"
)

type CustomerService struct {
    dbConn *gorm.DB
}

func (cs *CustomerService) PostCustomer(id, name, email string, number *int, address *string) error {
    customer := models.NewCustomer(id, name, email , number , address )
    err := cs.dbConn.Create(&customer).Error
    return err
}

func NewCustomerService(dbConn *gorm.DB) *CustomerService{
    return &CustomerService{
        dbConn,
    }
}
