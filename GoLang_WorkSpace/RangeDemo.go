package main
import("fmt")

func main(){

	// declaration of a slice and using range with same

	fmt.Println("\n\n-----Playing with Slice----------\n")
	nums:= []int{0,1,2,3,4,5,6}
	var sum int
	
	for _,num := range nums {
		sum += num
	}
	fmt.Println("\nSum : ",sum)
	for index,num := range nums {
		fmt.Println("\nValue at slice index : ",index," is ",num)
	}

	// declaration of a slice and using range with same

	fmt.Println("\n\n-----Playing with Map----------\n")
	maps := map[int]int{1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10}

	for i,m := range maps{
		fmt.Println("\nValue at map index : ",i," is ",m)
	}

	fmt.Println("\n\n-----Playing with string -> 'abcdefg'----------\n")

	for i,m := range "abcdefg"{
		fmt.Println("\nValue of 'abcdefg' at index : ",i," is ",m)
	}
	//Demo();
}