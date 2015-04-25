class Solution:
    # @param {integer[]} nums
    # @param {integer} target
    # @return {integer[]}
    def twoSum(self, nums, target):
        sorted_nums = sorted(nums)
        i = 0
        j = len(sorted_nums) - 1
        while (sorted_nums[i] + sorted_nums[j] != target and i != j):
            sum = sorted_nums[i] + sorted_nums[j]
            if (sum < target):
                i += 1
            else:
                j -= 1
        less = sorted_nums[i]
        more = sorted_nums[j]
        i = 0;
        j = 0;
        while (nums[i] != less):
            i += 1
        while (nums[j] != more or j == i):
            j += 1
        if (i > j):
            return [j+1, i+1]
        else:
            return [i+1, j+1]