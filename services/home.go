package services

import "github.com/RPJ-Overseas-Exim/yourpharma-htmx/utils/customTypes"

type HomeService struct{
    dbStore []*customTypes.Product
}

func NewHomeService() *HomeService{
    return &HomeService{
        products,
    }
}

func (hs *HomeService) GetFeaturedProducts () ([]*customTypes.Product, error) {
    return hs.dbStore, nil
}

