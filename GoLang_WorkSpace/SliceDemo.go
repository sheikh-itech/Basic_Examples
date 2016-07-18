package main
import("fmt")
func main(){
	
	n := make([]string,3)
	fmt.Println("\nn with 0 element : ", n,"Capacity : ",cap(n),"Length : ",len(n))

	number := make([]int,3,5)
	fmt.Println("\nnumber with 0 element : ", number,"Capacity : ",cap(number))


	number[0] = 0
	number[1] = 1
	number[2] = 2
	fmt.Println("\nnumber with elements : ", number,"Capacity : ",cap(number))


	number = append(number,3,4)
	number = append(number,5,6,7,8,9)
	fmt.Println("\nnumber after append : ", number,"Capacity : ",cap(number))


	num := make([]int ,len(number))
	copy(num, number)
	fmt.Println("\nCopy of number as num : ", num,"Capacity : ",cap(num))
	fmt.Println("\nSlicing num[0:4]: ", num[0:4])
	fmt.Println("\nSlicing num[4:]: ", num[4:]," --> 4 to end of slice")
	fmt.Println("\nSlicing num[:]: ", num[:]," --> 0 to end of slice")

    twoD := make([][]int, 5)

    for i := 0; i < 5; i++ {
        innerLen := i + 1
        twoD[i] = make([]int, innerLen)
        for j := 0; j < innerLen; j++ {
            twoD[i][j] = i + j
        }
    }

    fmt.Println("\n2d slice : ", twoD)

}