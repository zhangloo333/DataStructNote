/**
 * Created by lee on 3/9/17.
 */


var maxArea = function(height) {
    var water  = 0;
    var start = 0;
    var end = height.length-1;

    while(start < end) {
        water = (end - start) * Math.min(height[start])
    }

};