package main

import "fmt"

func main() {
   var a = 30 
   var b = 20
   var y = 0
   y =  max(a,b)
   fmt.Println(y)
}

func max(num1, num2 int) int{
   /* local variable declaration */
   

   if (num1 > num2) {
      return num1
   } else {
      return num2
   }
   
}