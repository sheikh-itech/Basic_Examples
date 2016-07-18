package main
import "fmt"

func main(){

	fmt.Println("\nDemo of functions\n")
	value := getSum(15,25);
	fmt.Println("Sum of  15, 25 int : ",value)
	val1, val2 := swap(24,78)
	fmt.Println("\nAfter Swaping 24 and 78 :",val1,val2 )


}
func getSum(value1, value2 int)int{
	return value1 + value2;
}
func swap(value1, value2 int)(int,int){
	return value2,value1
}