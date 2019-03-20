/**
 *
 * 1. use Map as HashMap, it's slightly faster than plain Object
 * 2. use do-while (--) to optimize iterations (better than do-while(++) and for)
 * 3. set the complement of the current number into HashMap, this helps reduce some arithmetic ops
 * 4. use `===` instead of `==`, this is slightly faster
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    var len = nums.length;

    var num = 0;
    var leftIndex = -1;

    var map = new Map();

    while (len--) {
        num = nums[len];

        leftIndex = map.get(num);

        if (leftIndex !== undefined) {
            return [len, leftIndex];
        }

        map.set(target - num, len);
    }
};