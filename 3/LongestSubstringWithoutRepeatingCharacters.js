/**
 * #3 Longest Substring Without Repeating Characters
 * substr and charAt is slow
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var longest = 0;
    var start = 0;
    var end = 0;
    var l = 0;

    if (s.length < 2) {
        return s.length;
    }

    while (end !== s.length - 1) {
        //check if equals
        var sub = s.substr(start, end - start + 1);
        var c2 = s.charAt(end + 1);
        if (sub.indexOf(c2) !== -1) {
            //settlement
            l = end - start + 1;
            if (longest < l) {
                longest = l;
            }
            start++;
            end = start;
        } else {
            end++;
            //settlement
            l = end - start + 1;
            if (longest < l) {
                longest = l;
            }
        }
    }

    return longest;
};