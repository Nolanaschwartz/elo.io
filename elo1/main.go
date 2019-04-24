package main

import (
	"fmt"
	"sync"
	"time"
)

// main counts to 1 billion as fast as possible by incrementing a variable using goroutines

// This solution assumes that you only one to have one instance of the goroutine
// Therefore the for loop iterating 1000 times is unneeded
func main() {
	t := time.Now()
	wg := sync.WaitGroup{}

	wg.Add(1)
	go func() {
		for n := 0; n < 1000000000; n++ {
		}
		wg.Done()
	}()

	wg.Wait()
	fmt.Println("counted to 1000000000 in", time.Since(t))
}


// This solution assumes that you want to have 1000 instances of the go routine
//func main() {
//
//	wg := sync.WaitGroup{}
//	for i := 0; i < 1000; i++ {
//		fmt.Println(i)
//		wg.Add(1)
//		go countToBillion(&wg)
//		wg.Wait()
//	}
//}
//
//func countToBillion(wg *sync.WaitGroup){
//	t := time.Now()
//	n := 0
//	for  n < 1000000000 {
//		n++
//	}
//	wg.Done()
//
//	fmt.Println("counted to", n, "in", time.Since(t))
//}