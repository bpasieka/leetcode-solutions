package main

func canJump(nums []int) bool {
	memo := make(map[int]bool)
	return canJumpIter(nums, 0, memo)
}

func canJumpIter(nums []int, index int, memo map[int]bool) bool {
	length := len(nums)

	if index >= length {
		return false
	}

	if index == length-1 {
		return true
	}

	if nums[index] == 0 {
		return false
	}

	if value, ok := memo[index]; ok {
		return value
	}

	for i := 1; i <= nums[index]; i++ {
		if canJumpIter(nums, index+i, memo) {
			return true
		}
	}

	memo[index] = false
	return false
}
