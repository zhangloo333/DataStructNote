/**
 * Created by lee on 4/29/17.
 * @param {Interval[]} interves
 * @param {Interval} newInterval;
 * @return {Interval[]}

 首先判断 一个interval 和 一个interval 的关系，
 如果 interval 和 newtnterval 的关系：相邻，相交
 相邻：2 种，
 1. 在interval 的左边，把newinterval 推入结果里面， 然后把 interval 变成 new interval
 2. 在interval 的右边，把interval 推入结果里面，然后比较下一个interval 和 new interval 关系

 如果是相交的情况：
 我们找到 最小的为 newinterval的最大情况；
 我们找到，最大的为 newinterval的最小情况；
 建立一个新的newinterval，
 然后在下一次循环的时候，与下一个interval 作对比。

 */

var Interval = function (s,e) {
    this.start = s;
    this.end = e;
}

function insert(intervals, newInterval) {
    var result = [];

    for(var i = 0; i < intervals.length; i++) {
        var interval = intervals[i];

        if(interval.end < newInterval.start){
            result.push(interval);
        } else if(interval.start > newInterval.end) {
            result.push(newInterval);
            newInterval = interval;
        } else {
            var newStart = Math.min(interval.start,newInterval.start);
            var newEnd = Math.max(interval.end, newInterval.end);
            newInterval = newInterval(newStart,newEnd);
        }
    }
    result.push(newInterval);
    return result;
}
