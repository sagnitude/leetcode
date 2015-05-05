class Solution:
    # @param {string} str
    # @return {integer}
    def myAtoi(self, str):
        if len(str) is 0:
            return 0
        sa = str.split()[0]
        a = 0
        r = 0
        for i in range(0, len(sa)):
            if sa[i] == '+' and a is 0:
                a = 1
                continue
            if sa[i] == '-' and a is 0:
                a = -1
                continue
            o = ord(sa[i])
            if 48 <= o < 58:
                if a is 0:
                    a = 1
                if r * a > 214748364 or (r * a == 214748364 and o >= 55):
                    return 2147483647
                if r * a < -214748364 or (r * a == -214748364 and o >= 56):
                    return -2147483648
                r *= 10
                r += (o - 48)
                continue
            break
        return r * a

s = Solution()
print s.myAtoi("2147483648")