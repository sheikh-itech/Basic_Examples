package main
import "fmt"

func f(val string){
	for i := 0; i<5; i++{
		fmt.Println(val, " : ", i)
	}
}

func main(){
	
	f("direct")
	go f("GoRoutine")

	go func(msg string){
		fmt.Println(msg)
	}("going--from autonomous func")

 
	 var input string
         fmt.Scanln(&input)
         fmt.Println("done")

}