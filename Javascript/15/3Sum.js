/**
 * #15 3Sum
 * @param {number[]} num
 * @returns {number[][]} an array of number arrays with length = 3
 */
var threeSum = function (num) {
    var last = null;
    var result = [];
    var rmap = {};

    var allTwoSum = function(nums, target, root) {
        var map = {};

        for (var i = 0; i < nums.length; i++) {
            if (map.hasOwnProperty(nums[i])) {
                rmap[[root, map[nums[i]], nums[i]]] = true;
            } else {
                map[target - nums[i]] = nums[i];
            }
        }
    };

    var sorted = num.sort(function(x, y){
        if (x<y) {
            return -1;
        } else if (x>y) {
            return 1;
        }
    });

    for (var i = 0; i < sorted.length; i++) {
        if (sorted[i] === last) {
            continue;
        }
        last = sorted[i];
        allTwoSum(sorted.slice(i+1), - sorted[i], sorted[i]);
    }

    var keys = Object.keys(rmap);
    keys.forEach(function(item) {
        var s = [];
        item.split(",").forEach(function(number) {
            s.push(~~number);
        });
        result.push(s);
    });
    return result;
};