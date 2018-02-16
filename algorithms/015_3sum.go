package main

import "sort"

func threeSum(nums []int) [][]int {
	result := [][]int{}
	length := len(nums)
	if length < 2 {
		return result
	}

	sort.Ints(nums)
	for x := 0; x < length-2; x++ {
		if x > 0 && nums[x] == nums[x-1] {
			continue
		}
		y := x + 1
		z := length - 1
		target := -nums[x]
		for y < z {
			if nums[y]+nums[z] == target {
				result = append(result, []int{nums[x], nums[y], nums[z]})
				y++
				z--

				for y < z && nums[y] == nums[y-1] {
					y++
				}
				for y < z && nums[z] == nums[z+1] {
					z--
				}
			} else if nums[y]+nums[z] > target {
				z--
			} else {
				y++
			}
		}
	}

	return result
}
