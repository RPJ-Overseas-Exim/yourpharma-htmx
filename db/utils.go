package db

import (
	"log"

	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"github.com/aidarkhanov/nanoid"
	"gorm.io/gorm"
)

func GenerateNanoid() string {
	alphabets := nanoid.DefaultAlphabet
	id, err := nanoid.Generate(alphabets, 12)
	if err != nil {
		log.Fatal("Could not generate nanoid")
	}
	return id
}

func populateTempData(db *gorm.DB) {
	zolpidemId := GenerateNanoid()
	alprazolamId := GenerateNanoid()
	clonazepamId := GenerateNanoid()
	lorazepamId := GenerateNanoid()
	priceQty, err := models.NewPriceQty(zolpidemId, []string{GenerateNanoid(), GenerateNanoid()}, []int16{245, 360}, []int16{90, 180})
	priceQty1, _ := models.NewPriceQty(zolpidemId, []string{GenerateNanoid(), GenerateNanoid()}, []int16{245, 360}, []int16{90, 180})
	priceQty2, _ := models.NewPriceQty(zolpidemId, []string{GenerateNanoid(), GenerateNanoid()}, []int16{245, 360}, []int16{90, 180})
	priceQty3, _ := models.NewPriceQty(zolpidemId, []string{GenerateNanoid(), GenerateNanoid()}, []int16{245, 360}, []int16{90, 180})

	if err != nil {
		log.Fatalln(err.Error())
	}

	product := []*models.Product{
		models.NewProduct(zolpidemId, "zolpidem", priceQty),
		models.NewProduct(alprazolamId, "alprazolam", priceQty1),
		models.NewProduct(clonazepamId, "clonazepam", priceQty2),
		models.NewProduct(lorazepamId, "lorazepam", priceQty3),
	}

	results := db.Create(product)

	if results.Error != nil {
		log.Fatal("Product initialization failed")
	} else {
		log.Println("Products initialized successfully")
	}
}

func migrateDb(db *gorm.DB){
    db.AutoMigrate(&models.Product{})
    db.AutoMigrate(&models.Customer{})
    db.AutoMigrate(&models.Order{})
    db.AutoMigrate(&models.PriceQty{})
}
