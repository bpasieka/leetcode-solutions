package main

func maxProfit(prices []int) int {
	length := len(prices)
	if length == 0 {
		return 0
	}

	min := prices[0]
	maxProfit := 0

	for i := 1; i < length; i++ {
		profit := prices[i] - min
		if profit > maxProfit {
			maxProfit = profit
		}

		if prices[i] < min {
			min = prices[i]
		}
	}

	return maxProfit
}
