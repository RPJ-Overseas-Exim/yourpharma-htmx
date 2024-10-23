FROM golang:1.23

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .

RUN go build -o ./docker-yp ./cmd/main.go

EXPOSE 1323

CMD ["./docker-yp"]
