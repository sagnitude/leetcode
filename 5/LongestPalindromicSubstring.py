class Solution:
    # @param {string} s
    # @return {string}
    def longestPalindrome(self, s):
        if len(s) < 2:
            return s
        min_in = 0
        max_len = 1
        i = 0
        while i < len(s):
            if len(s) - i <= max_len / 2:
                break
            j = i
            k = i
            while k < len(s) - 1 and s[k + 1] == s[k]:
                k += 1
            i = k + 1
            while k < len(s) - 1 and j > 0 and s[k + 1] == s[j - 1]:
                k += 1
                j -= 1
            n = k - j + 1
            if n > max_len:
                min_in = j
                max_len = n
        return s[min_in:min_in+max_len]


s = Solution()
print s.longestPalindrome("asdfdsa")