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
    var indices = new Array(nums.length);
    for (var k = 0; k < nums.length; k++) {
        indices[k] = k;
    }
    var sorted = indices.sort(function(x, y){
        if (nums[x] < nums[y]) {
            return -1;
        } else if (nums[x] > nums[y]) {
            return 1;
        }
    });
    var i = 0;
    var j = sorted.length - 1;
    var sum;
    while ((sum = nums[sorted[i]] + nums[sorted[j]]) !== target && i !== j) {
        sum < target ? i++ : j--;
    }
    var x = sorted[i];
    var y = sorted[j];
    return x > y ? [y, x] : [x, y];
};

var a = function() {
    function insertSort(arr, list) {
      for (var i = 1; i < arr.length; i++) {
        var tmp = arr[i],
            j = i;
        while (list[arr[j - 1]] > list[tmp]) {
          arr[j] = arr[j - 1];
          --j;
        }
        arr[j] = tmp;
      }

      return arr;
    }
    var indices = [];
    for (var k = 0; k < nums.length; k++) {
        indices[k] = k;
    }
    var sorted = insertSort(indices, nums);
    var i = 0;
    var j = sorted.length - 1;
    var sum;
    while ((sum = nums[sorted[i]] + nums[sorted[j]]) !== target && i !== j) {
        sum < target ? i++ : j--;
    }
    var x = sorted[i];
    var y = sorted[j];
    return x > y ? [y, x] : [x, y];
}