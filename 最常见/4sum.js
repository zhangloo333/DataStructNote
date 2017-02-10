/**
 * Created by leizha on 2/9/17.
 */


function fourSum(nums,target) {
    // if(nums.length == 4 && nums[0]+nums[1]+nums[2]+nums[3] == target) {
    //     return [nums];
    // }

    if(nums.length <4){
        return [];
    }

    nums.sort(function (a,b) {
        return a - b;
    });

    var res = [];

    for(var i = 0; i < nums.length -3; i++) {
        if(i > 0 && nums[i] == nums[i-1]) { // 这一点容易出错 i -1 而不是 i +1 因为是和她的前一个进行对比。
            continue;
        }

         for(var j= i+1; j<nums.length-2; j++){
             if(j>i+1 && nums[j] == nums[j-1]) { // j> i+1 一定好似大于它的初值
                 continue;
             }

            var start = j + 1;
            var end = nums.length-1;

             while(start < end){

               var sum = nums[i] + nums[j] + nums[start] + nums[end];

                if(sum == target) {
                    res.push([nums[i],nums[j],nums[start],nums[end]]);

                    while(start<end && nums[start] == nums[start+1]){
                        start++;
                    }
                    while(start<end && nums[end] == nums[end-1]){
                        end--;
                    }
                    start++;
                    end--;
                } else if(sum < target) {
                    start++;
                } else {
                    end--;
                }
            }
        }
    }
    return res;
}

var test = [0,0,0,0];
console.log(fourSum(test,0));
