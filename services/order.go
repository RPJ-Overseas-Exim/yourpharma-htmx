package services

import "github.com/RPJ-Overseas-Exim/yourpharma-htmx/utils/customTypes"

type OrderService struct{
    order []*customTypes.Order
}


func NewOrderService() *OrderService{
    return &OrderService{
        orders,
    }
}

func (ordSer *OrderService) PostOrder(name, email, address, product string, qty, amt int) error{
    ordSer.order = append(ordSer.order, customTypes.NewOrder("lol", name, email, address, product , qty, amt))
    return nil
}
