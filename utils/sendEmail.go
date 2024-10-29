package utils

import (
	"net/smtp"
	"os"

	"github.com/joho/godotenv"
)

func SendMail(to, messageString string) error{
    message := []byte(messageString)

    config := getEmailConfig()
    auth := smtp.PlainAuth("", config.from, config.password, config.host )

    return smtp.SendMail(config.host + ":587", auth, config.from, []string{to}, message)
}

type EmailConfig struct{
    host, from, password string
}

var emailConfig *EmailConfig

func getEmailConfig() *EmailConfig{
    if emailConfig == nil{
        emailConfig = newEmailConfig()
        return emailConfig
    }
    return emailConfig
}

func newEmailConfig() *EmailConfig{
    err := godotenv.Load()
    HandleError(err, "Env File could not be loaded")
    return &EmailConfig{
        host: os.Getenv("SMTP_HOST"),
        from: os.Getenv("SMTP_USER"),
        password: os.Getenv("SMTP_PASSWORD"),
    }
}

