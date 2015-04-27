/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 2) {
        var result = "";
        for (var ii = 0; ii < s.length; ii+=2) {
            result += s[ii];
        }
        for (ii = 1; ii < s.length; ii+=2) {
            result += s[ii];
        }
        return result;
    }
    var half = ~~(numRows / 2);
    var even = numRows % 2 === 0;
    var rl = [];
    var rr = [];
    var rc = "";
    for (var i = 0; i < numRows; i++) {
        if (i !== half || even) {
            var ri = "";
            var n = (s.length - i) / (numRows + 1);
            for (var j = 0; j < n; j++) {
                ri += s[(numRows + 1) * j + i];
            }
            if (i < half) {
                rl.push(ri);
            } else {
                rr.push(ri);
            }
            //result[i] = ri;
        } else if (!even) {
            var cn = (s.length - half) / (half + 1);
            for (var k = 0; k < cn; k++) {
                rc += s[half + k * (half + 1)];
            }
            //result[half] = rc;
        }
    }
    if (even) {
        var count = (s.length - numRows) / (numRows + 1);
        for (var l = 0; l < count; l++) {
            rc += s[(numRows + 1) * l + numRows];
        }
    }
    return rl.join("") + rc + rr.join("");
};