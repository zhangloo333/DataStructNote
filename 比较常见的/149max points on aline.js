/**
 * Created by leizha on 2/27/17.
 *
 * give an point on 2d plane, 找出最多的点在一条直线上；

 function Point(x, y) {
      this.x = x;
    this.y = y;
 }

 @param {Point[]} points
 @return {number}


 Ax + By + C =0
 A =y2-y1;
 B = x1 -x2;
 c = x2*y1 -x1*y2

 点到直线的距离：
 d = Ax0 + By0 +c/ 根号下 A平方 + B平方

 这一题为什么不能用距离：是因为有可能这些点都是在一条直线上的。所以判断只能用斜率，而不能用距离；

 *
 */


var maxPoints = function(points) {
    if(points.length <= 2) return points.length;

    //Build a line function
    var max = 2;
    var endE = points.length-1;
    var A = points[endE].y - points[0].y;
    var B = points[0].x - points[endE].x;
    // var C = points[endE].x * points[0].y - points[endE].y*points[0].x;


    var map = new Map();
    map.set(0,2);

    for(var i=1; i<points.length-1; i++) {
        var temp = A * points[i].x + B * points[i].y
        if(!map.has(temp)) {
            map.set(temp,0);
        } else {
            var counter = map.get(temp);
            map.set(temp,counter+1);
        }

       max = Math.max(max,map.get(temp));
    }

    console.log(map);
    return max;
};

function Point(x, y) {
    this.x = x;
    this.y = y;
}

var a = new Point(2,3);
var b = new Point(3,3);
var c = new Point(-5,-3);
// var c = new Point(-5,-3);

var pi = [];
pi.push(a);
pi.push(b);
pi.push(c);
console.log(pi);

console.log(maxPoints(pi));


// var pi = [[0,0],[1,1],[1,-1]];
