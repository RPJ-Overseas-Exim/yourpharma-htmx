package models

type Customer struct{
    Id,
    Name string 
    Email string `gorm:"uniqueIndex"`
    Number *int 
	Address *string
    Order []Order
}

func NewCustomer(id, name, email string, number *int, address *string) *Customer{
    return &Customer{
        Id:id,
        Name:name,
        Email:email,
        Number: number,
        Address:address,
    }
}
