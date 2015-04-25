/**
 * #168: Excel Sheet Column Title
 * log is better for handling exponents
 * 2^3 != Math.pow(2, 3), note
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var vol = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var max = ~~(Math.log(25 * n + 1) / Math.log(26));
    var result = "";
    while (max) {
        var left = n % 26;
        if (!left) {
            left = 26;
        }

        result = vol[left] + result;
        n = ~~(n / 26) - ~~(left / 26);

        max--;
    }
    return result;
};