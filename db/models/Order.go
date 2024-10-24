package models

import "time"

type Order struct {
	Id,
	Name,
	Email string;
	Address *string;
	Product string;
	Quantity,
	Amount int;
    CreatedAt,
    UpdatedAt time.Time
}
