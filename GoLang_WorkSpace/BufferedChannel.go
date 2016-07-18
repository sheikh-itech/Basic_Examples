package main
import "fmt"

func main(){
	
	message := make(chan string,3)

	go func(){
		message <- "channel demo"
		message <- "channel demo1"
	}()

 
	 fmt.Println(<- message)
         fmt.Println(<- message)

	 
 // Again this function call to show error(for out of bounds)

	 fmt.Println(<- message)

}