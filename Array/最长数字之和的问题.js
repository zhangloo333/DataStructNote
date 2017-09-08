/**
 * Created by lee on 9/1/17.
 */


function miniSubArrayLen(s,nums) {
    var l = 0 ,r = -1;
    var res = nums.length+1;
    var sum = 0;
    var record = [];

    while(l < nums.length) {
        if(r+1 < nums.length && sum < s) {
            sum += nums[++r];
        } else {
            console.log('lbefore',l);
            sum -= nums[l++];
            console.log('lafter',l);
        }
        if(sum >= s){
            console.log('enter');
            if(res > r-l+1){
                var temp = [];
                temp.push(l,r);
                record.push(temp);
            }
            res  = Math.min(res,r-l+1);
            console.log('res', res, 'record', record);
        }
    }

    if(res == nums.length+1) {
        return 0;
    }

    return res;

}

var test = [2, 3, 1, 2, 4, 3];
var target = 7;

console.log(miniSubArrayLen(target,test));