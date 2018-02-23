package main

func setZeroes(matrix [][]int) {
	rowsLen := len(matrix)
	if rowsLen == 0 {
		return
	}
	colsLen := len(matrix[0])

	rows := make([]bool, rowsLen)
	cols := make([]bool, colsLen)

	for row := 0; row < rowsLen; row++ {
		for col := 0; col < colsLen; col++ {
			if matrix[row][col] == 0 {
				rows[row] = true
				cols[col] = true
			}
		}
	}

	for row := 0; row < rowsLen; row++ {
		for col := 0; col < colsLen; col++ {
			if rows[row] == true || cols[col] == true {
				matrix[row][col] = 0
			}
		}
	}
}
