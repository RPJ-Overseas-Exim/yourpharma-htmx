package services

import (
	"fmt"

	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/db/models"
	"github.com/RPJ-Overseas-Exim/yourpharma-htmx/utils"
	"gorm.io/gorm"
)

type OrderService struct {
	dbConn *gorm.DB
}

func NewOrderService(dbConn *gorm.DB) *OrderService {
	return &OrderService{
		dbConn,
	}
}

func (ordSer *OrderService) PostOrder(customerId, email, name, productId string, qty, amt int) error {

    var product models.Product
    ordSer.dbConn.Select("name").First(&product, "id = ?", productId)

	models.NewOrder(db.GenerateNanoid(), customerId, productId, qty, amt)

    body := fmt.Sprintf(`
    Hi %[1]s,

    Hope you are well.

    We have received your inquiry on Indiamart for %[2]s.

    We can ship you Alprazolam 1 MG, USA to USA shipping via USPS, so no customs issue.

    Payment mode Paypal, credit card, debit card, Zelle, Venmo, Cashapp, Western Union, moneygram and Bitcoin.

    Best rates in the market 90 pills for 285$ and 180 pills for 420$.


    We have all the benzos like 
    Alprazolam 1 MG 90 pills for 285$ and 180 pills for 420$.
    Clonazepam 2 MG 90 pills for 285$ and 180 pills for 420$.
    Lorazepam 2 MG 90 pills for 285$ and 180 pills for 420$.
    Diazepam 10 MG 90 pills for 285$ and 180 pills for 420$.
    Zolpidem 10 MG 90 pills for 285$ and 180 pills for 420$.
    Soma 500 MG 180 pills for 225$
    Tramadol and Tapentadol is 100  MG 90 pills for 285$ and 180 pills for 420$.

    All USA to USA free shipping via USPS.

    Regards
    Alan/ Anna
    Your Pharma:- https://yourpharmastore.co.uk/
    Call at +1 (256)-472-1743
    Chat with us https://yp-messenger-next-one.vercel.app
    Telegram @yourpharmausa`, name, product.Name)

    message := fmt.Sprintf(`Subject: Enquiry for product %[1]s\r\n\r\n%[2]s`, product.Name, body)

    return utils.SendMail(email, message)
}

func (ordSer *OrderService) GetAmount(productId string, qty int) (int, error) {
	var priceQty models.PriceQty

    err := ordSer.dbConn.First(&priceQty, "product_id = ? AND qty= ?", productId, qty).Error

	if err != nil {
		return 0, err
	}
    return int(priceQty.Price), err
}
