/**
 * Created by leizha on 3/9/17.
 */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * 
 */

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        var start = 1;
        var end = n;
        var mid;
        while(start < end) {
            mid = start + parseInt((end-start)/2)
            if(isBadVersion(mid)){
                end = mid;
            } else{
                start = mid + 1;
            }
        }
        return end;
    };
};