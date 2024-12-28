package db

import (
	"log"
	"os"

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

    db, err := gorm.Open(postgres.Open(dbURL), &gorm.Config{
        PrepareStmt: true,
        SkipDefaultTransaction: true,
    })

    if err!=nil{
        log.Fatal("Error connecting to database")
    }
    // migrateDb(db)
    // populateTempData(db)

    return db
}

