/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = (s, numRows) => {
    if (numRows === 1) {
        return s;
    }

    const zigZagMapping = [];
    for (let i = 0; i < numRows; i++) {
        zigZagMapping[i] = [];
    }

    let forward = true;
    let line = 0;
    for (let i = 0; i < s.length; i++) {
        zigZagMapping[line].push(s.charAt(i));
        if (line === (numRows - 1)) {
            forward = false;
            line--;
        } else if (line === 0 && forward === false) {
            forward = true;
            line++;
        } else if (forward === true) {
            line++;
        } else {
            line--;
        }
    }

    let word = '';
    for (let i = 0; i < numRows; i++) {
        word += zigZagMapping[i].join('');
    }

    return word;
};