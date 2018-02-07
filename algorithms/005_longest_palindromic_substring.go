package main

func longestPalindrome(s string) string {
	chars := []rune(s)
	length := len(chars)

	palindromeMap := make([][]bool, length)
	for i := range palindromeMap {
		palindromeMap[i] = make([]bool, length)
	}

	maxLength := 1
	maxLengthI := 0
	maxLengthJ := 0

	for i := range chars {
		palindromeMap[i][i] = true
	}

	for i := 0; i < length-1; i++ {
		if chars[i] == chars[i+1] {
			palindromeMap[i][i+1] = true
			maxLength = 2
			maxLengthI = i
			maxLengthJ = i + 1
		}
	}

	for subLength := 3; subLength <= length; subLength++ {
		for i := 0; i+subLength <= length; i++ {
			start := chars[i]
			end := chars[i+subLength-1]

			if start != end {
				continue
			}

			if !palindromeMap[i+1][i+subLength-2] {
				continue
			}

			palindromeMap[i][i+subLength-1] = true

			if subLength > maxLength {
				maxLength = subLength
				maxLengthI = i
				maxLengthJ = i + subLength - 1
			}
		}
	}

	return string(chars[maxLengthI : maxLengthJ+1])
}
