class Solution:
    # @param {string} s
    # @param {integer} numRows
    # @return {string}
    def convert(self, s, numRows):
        ceil = lambda x: int(x) + 1
        if numRows == 1:
            return s
        step = 2 * numRows - 2
        cycles = ceil(len(s) / step)
        result = ""
        for i in range(numRows):
            for j in range(cycles - 1):
                result += s[i + step * j]
                if i != 0 and i != (numRows - 1):
                    result += s[step * (j + 1) - i]
            j = cycles - 1
            if (i + step * j) < len(s):
                result += s[i + step * j]
            if i != 0 and i != (numRows - 1) and (step * (j + 1) - i) < len(s):
                result += s[step * (j + 1) - i]
        return result

s = Solution()
s.convert("AB", 2)