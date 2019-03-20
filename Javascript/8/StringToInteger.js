/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var INT_MAX = 2147483647;
    var INT_MIN = -2147483648;
    var result = parseInt(str);
    if (result >= INT_MIN && result <= INT_MAX) {
        return result;
    } else if (result < INT_MIN) {
        return INT_MIN;
    } else if (result > INT_MAX) {
        return INT_MAX;
    }
    return 0;
};