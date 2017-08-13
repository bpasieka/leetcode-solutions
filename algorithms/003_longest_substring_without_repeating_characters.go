package main

func lengthOfLongestSubstring(s string) int {
	result := 0
	sLen := len(s)
	cache := make(map[byte]int)

	lastDup := -1
	for i := 0; i < sLen; i++ {
		if j, ok := cache[s[i]]; ok && j > lastDup {
			lastDup = j
		}
		cache[s[i]] = i

		if iLen := i - lastDup; iLen > result {
			result = iLen
		}
	}

	return result
}
