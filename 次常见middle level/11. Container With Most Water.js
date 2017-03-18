/**
 * Created by lee on 3/9/17.

 求装最大水的面积s = l * h
 l: 是长
 h：是高

 l = prt2 - ptr1 这里有两个指针 ptr1 and ptr2, which separate in index 0 and index of length-1;
 所以长l是一直在缩小的，如果想让面积s不停的增大，那么h的增长速率一定要高于 l的缩小速率；
 决定h的长度是 两个potiner中最小的那个，所以移动最小的那个才会有机会是面积不断的增大；

 */


var maxArea = function(height) {
    var water  = 0;
    var start = 0;
    var end = height.length-1;

    while(start < end) {
        water = Math.max(water,(end - start) * Math.min(height[start],height[end]));
        if(height[start] < height[end]) start++;
        // if(height[start] > height[end]) end--;
        else end--;
    }
    return water;
};