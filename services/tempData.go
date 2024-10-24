package services

import (
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/utils/customTypes"
)


func Main(){
    zolpidem := customTypes.NewProduct("abc","Zolpidem", 245, 90 )
    zolpidem.PriceQty = append(zolpidem.PriceQty, customTypes.PriceQty{Price: 360, Qty: 180})
    products = append(products, zolpidem)
}


var products = []*customTypes.Product{
    customTypes.NewProduct("def","Alprazolam", 245, 90),
    customTypes.NewProduct("ghi","Clonazepam", 245, 90),
    customTypes.NewProduct("jkl","Lorazepam", 245, 90),
}

var orders = []*customTypes.Order{
    customTypes.NewOrder("abc", "rasid", "rasid@rasid.com", "mulund", "alprazolam", 180, 360),
}
