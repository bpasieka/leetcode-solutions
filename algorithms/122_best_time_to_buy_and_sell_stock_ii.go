package main

func maxProfit(prices []int) int {
	length := len(prices)
	if length == 0 {
		return 0
	}

	min := prices[0]
	maxLocalProfit := 0
	maxProfit := 0

	for i := 1; i < length; i++ {
		profit := prices[i] - min
		if profit > maxLocalProfit {
			maxLocalProfit = profit
		}

		if prices[i] < prices[i-1] {
			min = prices[i]
			maxProfit += maxLocalProfit
			maxLocalProfit = 0
		}
	}
	maxProfit += maxLocalProfit

	return maxProfit
}
