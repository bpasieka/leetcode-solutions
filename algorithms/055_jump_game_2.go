package main

func canJump(nums []int) bool {
	length := len(nums)
	lastGood := length - 1

	for i := length - 1; i >= 0; i-- {
		if i+nums[i] >= lastGood {
			lastGood = i
		}
	}

	return lastGood == 0
}
