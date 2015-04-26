class Solution:
    # @param {integer[]} nums1
    # @param {integer[]} nums2
    # @return {float}
    def findMedianSortedArrays(self, nums1, nums2):
        nums = nums1 + nums2
        nums = sorted(nums)
        even = len(nums) % 2 == 0
        half = len(nums) / 2
        if even:
            return (nums[half-1]+nums[half])/float(2)
        else:
            return nums[half]

s = Solution()
print s.findMedianSortedArrays([1,2],[1,1])