package main

func sortColors(nums []int) {
	index := 0

	for i := 0; i < 3; i++ {
		for j, value := range nums {
			if i == value {
				temp := nums[index]
				nums[index] = value
				nums[j] = temp
				index++
			}
		}
	}
}
