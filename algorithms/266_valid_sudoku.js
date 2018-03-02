/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
    const rowSetMap = {};
    const colSetMap = {};
    const squareSetMap = {};

    for (let i = 0; i < board.length; i++) {
        rowSetMap[i] = new Set();
        colSetMap[i] = new Set();
        squareSetMap[i] = new Set();
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            const char = board[i][j];
            if (char === '.') {
                continue;
            }
            const squareKey = 3 * parseInt(i / 3) + parseInt(j / 3);
            if (rowSetMap[i].has(char) || colSetMap[j].has(char) || squareSetMap[squareKey].has(char)) {
                return false;
            }

            rowSetMap[i].add(char);
            colSetMap[j].add(char);
            squareSetMap[squareKey].add(char);
        }
    }

    return true;
};