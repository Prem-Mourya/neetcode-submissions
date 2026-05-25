class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!=t.length)
        return false;
        const key1 = s.split('').sort().join();
        const key2 = t.split('').sort().join();
        if(key1===key2)
        return true;
        else return false;
    }
}
