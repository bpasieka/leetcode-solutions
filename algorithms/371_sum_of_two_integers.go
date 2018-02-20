package main

func getSum(a int, b int) int {
	if b == 0 {
		return a
	}

	newB := a & b << 1
	return getSum(a^b, newB)
}
