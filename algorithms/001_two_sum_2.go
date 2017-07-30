package main

import "fmt"

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
}

func twoSum(nums []int, target int) []int {
	numsMap := make(map[int]int)

	for index, value := range nums {
		numDiff := target - value
		if v, ok := numsMap[numDiff]; ok {
			return []int{v, index}
		}
		numsMap[value] = index
	}

	return []int{}
}
