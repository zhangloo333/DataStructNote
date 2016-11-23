/**
 * Created by lee on 11/22/16.
 */
function findBadversion(array,start,end) {
    if(array.length == 0 || array == null){
        return -1;
    }

    var start = start;
    var end = end;
    var mid = Math.trunc(start + (end-start)/2);

    if(start < end-1){
        if(isBadVersion(array[mid])){
            if(!isBadVersion(array[mid-1])){
                return mid;
            }
            return findBadversion(array,start,mid);
        } else {
            if(isBadVersion(array[mid+1])){
                return mid+1;
            }
            return findBadversion(mid+1,end);
        }
    }
    return;

}

function isBadVersion(input) {
    return input == 0 ? false:true;
}

function print(data) {
    console.log(data);
}

var trueflasetable = [0,0,1,1,1,1,1,1,1,1,1];
print('************');
print(findBadversion(trueflasetable,0,trueflasetable.length-1));