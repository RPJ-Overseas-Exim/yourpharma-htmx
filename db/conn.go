package db

import (
	"log"
	"os"

	// "github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"github.com/joho/godotenv"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func InitializeDB() *gorm.DB{
    err := godotenv.Load()

    if err!=nil {
        log.Fatal("Error loading .env file")
    }

    dbURL := os.Getenv("DATABASE_URL")

    db, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{})

    if err!=nil{
        log.Fatal("Error connecting to database")
    }

    // db.AutoMigrate(&models.Product{})
    // db.AutoMigrate(&models.Customer{})
    // db.AutoMigrate(&models.Order{})
    // db.AutoMigrate(&models.PriceQty{})
    //
    // populateTempData(db)

    return db
}

