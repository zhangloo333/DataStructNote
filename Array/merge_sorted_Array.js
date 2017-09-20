/**
 * Created by lee on 9/13/17.
 */


var merge = function(nums1, m, nums2, n) {
    var n1L = m-1;
    var n2L = n-1;
    var nnL = m+n-1;

    while(n1L >=0 && n2L >=0) {
        if(nums1[n1L] > nums2[n2L]) {
            nums1[nnL--] = nums1[n1L--];
        } else {
            nums1[nnL--] = nums2[n2L--];
        }
    }
    while(n2L >= 0){
        nums1[nnL--] = nums2[n2L--];
    }
};