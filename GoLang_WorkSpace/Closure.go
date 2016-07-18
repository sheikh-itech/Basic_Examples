package main
import "fmt"

func intVal() func() int{

	counter := 0

	return func() int{

		counter += 1

		return counter
	}
}
func main() {

	intValue1 := intVal()

	fmt.Println("\nFirst value by first time calling func : ",intValue1())
	fmt.Println("Second value by second time calling func : ",intValue1())
	fmt.Println("Third value by third time calling func : ",intValue1())

	intValue2 := intVal()

	fmt.Println("\nFirst value when again first time calling func : ",intValue2())
	fmt.Println("Second value when again second time calling func : ",intValue2())
}