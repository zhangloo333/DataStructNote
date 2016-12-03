/**
 * Created by leizha on 12/2/16.
 * sort color: 有一列 array 里面有只有三种可能 0红色 1白色 2蓝色
 * sort color 让 这个color从 红色 白色 蓝色的输出
 *
 * input: 一个无序的 color array
 * output： 一个有顺序的color array
 *
 * corner case： 如果array<=1 return null
 *
 * count and reset 的方法： 2 pass
 * 1。pass count 有几个0，1，2
 * 2。把原来array reset一下把0用完，1用完，2用完。输出。
 *
 * in place solution:
 * quick sort: 两个pivot 不停的在移动。
 *
 * 用pointer最主要的考虑就是 boundary 考虑boundary是否在前一个范围内。
 *
 */

// counter with 2 loops
function sortCorlor1(array) {
    var count = [0,0,0]// count[0] for red, count[1]

    for(var i = 0; i < array.length; i++) {
        if(array[i] == 0){
            count[0]++;
        } else if(array[i] == 1){
            count[1]++;
        } else {
            count[2]++;
        }
    }

    for(var i = 0; i < array.length; i++){
        if(count[0] > 0){
            array[i] = 0;
            count[0]--;
        } else {
            if(count[1] > 0){
                array[i] = 1;
                count[1]--;
            } else {
                array[i] = 2;
            }
        }
    }


}

// two pivot的方法来做；
function sortcolor(array){
    if(array == null || array.length < 0){
        return;
    }

    var wall1 = 0;
    var cur = 0;
    var wall2 = array.length-1;

    while (cur <= wall2){
        if(array[cur] == 0){
            swape(array,cur++,wall1++)
        } else if(array[cur] == 2){
            swape(array,cur,wall2--);
        } else {
            cur++;
        }
    }
}

function swape(array,pos1,pos2) {
    if(array[pos1] != array[pos2]){
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
    }
}

var testing = [0,2,0,1,0,2,0,1,2,0];
sortCorlor1(testing)
console.log(testing);

var testing2 = [0,2,0,1,0,2,0,1,2,0];
sortCorlor1(testing2)
console.log(testing2);