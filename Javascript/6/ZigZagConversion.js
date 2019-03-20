/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) {
        return s;
    }
    var step = 2 * numRows - 2;
    var cycles = Math.ceil(s.length / step);
    var result = "";
    for (var i = 0; i < numRows; i++) {
        for (var j = 0; j < cycles - 1; j++) {
            result += s[i + step * j];
            if (i !== 0 && i !== (numRows - 1)) {
                result += s[step * (j + 1) - i];
            }
        }
        j = cycles - 1;
        if (i + step * j < s.length) {
            result += s[i + step * j];
        }

        if (i !== 0 && i !== (numRows - 1) && (step * (j + 1) - i) < s.length) {
            result += s[step * (j + 1) - i];
        }
    }
    return result;
};