package main
import "fmt"
import "time"

func main(){
	
	done := make(chan bool, 1)
        go worker(done)
	
	<-done 
	
}
func worker(flag chan bool){
	
	fmt.Print("working...")
        time.Sleep(time.Second)
        fmt.Println("done")

	flag <- true
}