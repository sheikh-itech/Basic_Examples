package main
import("fmt")

func main() {

	fmt.Println("\n------Making map-------")

	m := make(map[int]string)
	fmt.Println("\nEnpty map",m)


	m[0] = "sheikh"
	fmt.Println("\nMap after initialise : ",m)
	fmt.Println("\nFirst value m[0] : ",m[0])
	fmt.Println("\nLength of map : ",len(m))


	m[1] = "hafeez"
	m[2] = "mansoori"
	fmt.Println("\nMap after initialise : ",m)
	fmt.Println("\nFirst value m[0], m[1], m[2] : ",m[0],", ",m[1],", ",m[2])
	fmt.Println("\nLength of map : ",len(m))


	fmt.Println("\n-----Lets delete element from Map-----")
	delete(m,2)
	fmt.Println("\nMap after deletion : ",m)
	fmt.Println("\nFirst value m[0], m[1]: ",m[0],", ",m[1])


	// map returns true if value at with key found, else false
	if elem, er := m[2]; !er {
		fmt.Println("\nGot err while retrieving 3rd element : ",er)
	}else{
		fmt.Println("\nThird element of map : ",elem)
	}
	fmt.Println("\nLength of map : ",len(m))


}