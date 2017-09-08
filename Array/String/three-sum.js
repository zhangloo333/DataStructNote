/**
 * Created by lee on 8/30/17.
 */
function threeSum(arr,target) {

    var output = [];

    arr.sort(function(a,b){return a-b;});

    for(var i = 0; i < arr.length-2; i++) {
        var rest = target - arr[i];

        var start = i + 1;
        var end = arr.length-1;

        while(start < end) {
            if(arr[start] + arr[end] == rest){
                var temp = [];
                temp.push(arr[i],arr[start],arr[end]);
                output.push(temp);
                //这一步很重要，要不会造成死循环；
                start++;
                end--;
            } else if(arr[start] + arr[end] > rest) {
                end--;
            } else if(arr[start] + arr[end] < rest) {
                start++;
            }
        }
    }

    return output;

}

var t = [1,3,2,5,6,7,30,20,45];

console.log(threeSum(t,37));