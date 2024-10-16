package services

import "github.com/RPJ-Overseas-Exim/yourpharma-htmx/utils/customTypes"

type ProductService struct{
    products  []*customTypes.Product
}

var products = []*customTypes.Product{
    customTypes.NewProduct("abc","Zolpidem", 245,90 ),
    customTypes.NewProduct("def","Alprazolam", 245, 90),
    customTypes.NewProduct("ghi","Clonazepam", 245, 90),
    customTypes.NewProduct("jkl","Lorazepam", 245, 90),
}

func (ps *ProductService) GetProducts() ([]*customTypes.Product, error){
    return products, nil
}

func (ps *ProductService) PostProduct(product *customTypes.Product)error{
    products = append(products, product)
    return nil
}

func (ps *ProductService) GetProduct(productId string) (*customTypes.Product, error){
    var product *customTypes.Product
    var err error = &customTypes.HttpException{ Message:"Couldn't get any product for the provided id." }
    for _, prod := range products{
        if prod.Id == productId{
            product = prod
            err = nil
        }
    }
    return product, err
}
