package db

import (
	"log"

	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"github.com/aidarkhanov/nanoid"
	"gorm.io/gorm"
)

func GenerateNanoid() string{
    alphabets := nanoid.DefaultAlphabet
    id, err:= nanoid.Generate(alphabets, 12)
    if err!=nil{
        log.Fatal("Could not generate nanoid")
    }
    return id
}

func populateTempData(db *gorm.DB) {
    zolpidemId:=GenerateNanoid()
    alprazolamId:=GenerateNanoid()
    clonazepamId:=GenerateNanoid()
    lorazepamId:=GenerateNanoid()
    product := []*models.Product{
        models.NewProduct(zolpidemId, "zolpidem" ,models.NewPriceQty(zolpidemId, []string{GenerateNanoid(), GenerateNanoid()}, []int16{90,180}, []int16{245, 360})),
        models.NewProduct(alprazolamId, "alprazolam" ,models.NewPriceQty(alprazolamId, []string{GenerateNanoid(), GenerateNanoid()}, []int16{90,180}, []int16{245, 360})),
        models.NewProduct(clonazepamId, "clonazepam" ,models.NewPriceQty(clonazepamId, []string{GenerateNanoid(), GenerateNanoid()}, []int16{90,180}, []int16{245, 360})),
        models.NewProduct(lorazepamId, "lorazepam" ,models.NewPriceQty(lorazepamId, []string{GenerateNanoid(), GenerateNanoid()}, []int16{90,180}, []int16{245, 360})),
    }

    results := db.Create(product)

    if results.Error !=nil{
        log.Fatal("Product initialization failed")
    }else {
        log.Println("Products initialized successfully")
    }
}
