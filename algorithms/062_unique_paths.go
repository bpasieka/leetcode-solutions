package main

import "fmt"

func uniquePaths(m int, n int) int {
	memo := make(map[string]int)
	return uniquePathsIter(1, 1, m, n, memo)
}

func uniquePathsIter(currentM int, currentN int, m int, n int, memo map[string]int) int {
	if currentM == m && currentN == n {
		return 1
	}

	key := fmt.Sprintf("%d-%d", currentM, currentN)
	if value, ok := memo[key]; ok {
		return value
	}

	numberOfPaths := 0
	if currentM < m {
		numberOfPaths += uniquePathsIter(currentM+1, currentN, m, n, memo)
	}
	if currentN < n {
		numberOfPaths += uniquePathsIter(currentM, currentN+1, m, n, memo)
	}
	memo[key] = numberOfPaths

	return numberOfPaths
}
