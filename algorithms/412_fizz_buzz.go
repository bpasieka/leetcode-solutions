package main

import "strconv"

func fizzBuzz(n int) []string {
	result := make([]string, n)

	for i := 1; i <= n; i++ {
		multOfThree := i % 3 == 0
		multOfFive := i % 5 == 0

		if multOfThree && multOfFive {
			result[i - 1] = "FizzBuzz"
		} else if multOfThree {
			result[i - 1] = "Fizz"
		} else if multOfFive {
			result[i - 1] = "Buzz"
		} else {
			result[i - 1] = strconv.Itoa(i)
		}
	}

	return result
}
