/**
 * Created by lee on 4/29/17.
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