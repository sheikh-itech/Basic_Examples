package main
import "fmt"

func main(){
	
	message := make(chan string)

	go func(){
		message <- "channel demo"
	}()

 
	 msg := <- message
         fmt.Println(msg)

}