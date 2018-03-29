package main

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	prefix := []rune(strs[0])
	for i := 1; i < len(strs); i++ {
		element := []rune(strs[i])

		length := len(prefix)
		if len(prefix) > len(element) {
			length = len(element)
		}

		inCommon := 0
		for j := 0; j < length; j++ {
			if prefix[j] != element[j] {
				break
			}

			inCommon++
		}

		if inCommon == 0 {
			return ""
		}

		prefix = prefix[:inCommon]
	}

	return string(prefix)
}
