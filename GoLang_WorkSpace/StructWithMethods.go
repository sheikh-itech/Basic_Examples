package main
import "fmt"

type Shape struct{
	width, height int
}

func (s Shape) area() int{
	return s.width * s.height
}
func main(){
	s := Shape{10,12}
	fmt.Println(s.area())
}