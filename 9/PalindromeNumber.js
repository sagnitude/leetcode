/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }
    var digits = (x + "").split("");
    //200->2
    var start = 0;
    var end = ~~(Math.log(x)/Math.log(10));
    do {
        //check
        if (digits[start] !== digits[end]) {
            return false;
        }
        start++;
        end--;
    }while(end - start > 0);
    return true;
};