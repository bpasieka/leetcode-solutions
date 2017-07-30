package main

import "fmt"

func main() {
	fmt.Println(twoSum([]int{2, 7, 11, 15}, 9))
}

func twoSum(nums []int, target int) []int {
	for i, l := 0, len(nums); i < l; i++ {
		for j := i + 1; j < l; j++ {
			if t := nums[i] + nums[j]; t == target {
				return []int{i, j}
			}
		}
	}

	return []int{}
}
