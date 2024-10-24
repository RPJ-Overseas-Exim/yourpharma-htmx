package db

import (
	"log"
	"time"

	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
)

func testDB(){
    db := InitializeDB()
       address := "Mumbai"

    order := models.Order{
           Id:"abc",
           Name:"Name",
           Email:"Email ",
           Address: &address,
           Product: "Product",
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
