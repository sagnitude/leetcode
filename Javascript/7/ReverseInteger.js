/**
 * Note: Dont use ~~ too much. parseInt is better for Number
 * ~~ has a limit about 9646324351: ~~"9646324351" = 1056389759
 * NOTE: before parseInt, multiply self by 1, helps avoid number base problems
 * Note: Number has its limit: Number.MAX_SAFE_INTEGER (~9007199254740991), 'd better find a big integer calculation lib.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x > 2147483647) {
        return 0;
    } else if (x < -2147483647) {
        return 0;
    }
    var minus = x < 0 ? "-" : "";
    var charArray = (x + "").split("");
    var result = "";
    while (charArray.length !== 0) {
        result += charArray.pop();
    }
    var ret = parseInt(1 * (minus + result.split("-")[0]));

    if (ret > 2147483647) {
        return 0;
    } else if (ret < -2147483647) {
        return 0;
    }
    return ret;
};