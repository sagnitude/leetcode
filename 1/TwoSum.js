/**
 * Binary Search for #1 Two Sum
 * note that nums.slice(0) do copies the array, while assgnments doesn't
 * note that [].sort() can't handle minus zero numbers:
 *   [1,2,3,4,5].sort() -> [1,2,3,4,5]
 *   [-1,-2,-3,-4,-5].sort() -> [-1,-2,-3,-4,-5]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var origin = nums.slice(0);
    var sorted = nums.sort(function(x, y){
        if (x<y) {
            return -1;
        } else if (x>y) {
            return 1;
        }
    });
    var i = 0;
    var j = sorted.length - 1;
    var sum;
    while (sorted[i] + sorted[j] !== target && i !== j) {
        sum = sorted[i] + sorted[j];
        if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    var less = sorted[i];
    var more = sorted[j];
    i = 0;
    j = 0;
    while (origin[i] !== less) {
        i++;
    }
    while(origin[j] !== more || j === i) {
        j++;
    }
    return i > j ? [j+1, i+1] : [i+1, j+1];
};
