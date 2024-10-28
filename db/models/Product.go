package models

type Product struct {
	Id string
    Name string `gorm:"uniqueIndex"`
	PriceQty []PriceQty `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
    Order []Order `gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
}

type PriceQty struct {
    Id,
    ProductId string  
	Price, Qty int16
}

func NewPriceQty(prodId string, id []string,price, qty []int16) *[]PriceQty{
	var priceQty []PriceQty
	for i := range price {
        priceQty = append(priceQty, PriceQty{Id: id[i],ProductId:prodId, Price: price[i], Qty: qty[i]})
	}
    return &priceQty
}

func NewProduct(id, name string, priceQty *[]PriceQty) *Product {
	return &Product{
		Id:       id,
		Name:     name,
		PriceQty: *priceQty,
	}
}
