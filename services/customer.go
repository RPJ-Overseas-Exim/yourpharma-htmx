package services

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"gorm.io/gorm"
	"gorm.io/gorm/clause"
)

type CustomerService struct {
	dbConn *gorm.DB
}

func (cs *CustomerService) PostCustomer(id, name, email string, number *int, address *string) error {
	customer := models.NewCustomer(id, name, email, number, address)
	err := cs.dbConn.
		Clauses(clause.OnConflict{
			Columns:   []clause.Column{{Name: "id"}},
			DoUpdates: clause.Assignments(map[string]interface{}{"email": email}),
		}).
	Create(&customer).Error
	return err
}

func NewCustomerService(dbConn *gorm.DB) *CustomerService {
	return &CustomerService{
		dbConn,
	}
}
