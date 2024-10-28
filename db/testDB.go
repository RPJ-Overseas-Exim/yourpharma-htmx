package db

import (
	"log"
	"time"

	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
)

func testDB(){
    db := InitializeDB()

    order := models.Order{
           Id:"abc",
           CustomerId: "jdfkjddk",
           ProductId: "fjdkjfsjdfkdfj",
           Quantity: 180,
           Amount: 360,
           CreatedAt: time.Now(),
           UpdatedAt: time.Now(),
    }

    db.Create(&order)
       var orderSelected models.Order
       db.Find(&orderSelected)
       log.Println(orderSelected)
}
