package utils

import "log"

func HandleError(err error, message string){
    if err!= nil{
        log.Fatalln(message)
    }
}
