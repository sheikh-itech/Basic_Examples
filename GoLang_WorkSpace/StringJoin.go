package main
import (
 "fmt"
 "strings"
)
func main() {
   greetings :=  []string{"Hello","world!","welcome","to","itech"}   
   fmt.Println(strings.Join(greetings, " "))
}