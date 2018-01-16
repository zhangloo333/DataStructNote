/**
 * Given a sorted array with duplicates and a number, find the range in the
 form of (startIndex, endIndex) of that number. For example,

find_range[0 2 3 3 3 10 10],  3 should return (2,4).
find_range[0 2 3 3 3 10 10],  6 should return (-1,-1).
The array and the number of duplicates can be large.
 */

 const findNumber = (arr, num) => {
  if(!arr) return [-1,-1];
  let start=0, end=arr.length-1;
  let result  =[];

  // binary search to find the point
  while(start < end) {
    let mid = start + parseInt((end - start)/2);
    console.log('mid', mid)

    if(arr[mid] > num) {
      end = mid-1;
    } else if(arr[mid] === num){
      console.log('mid', mid, arr[mid])
      result.push(mid);
      break;
    }
    start = mid + 1;
  }

  // find lefe index until the value is not target
  let startpointer = result[0];
  while(arr[result[0]] == arr[startpointer-1]) {
    startpointer--;
  }
  result[0] = startpointer;

  // find the right index until the value is not target
  let checkpointer = result[0];
  while(arr[result[0]] === arr[checkpointer+1]) {
    checkpointer++;
  }

  result.push(checkpointer);

  return result;
}

const ins = [0,2,3,3,3,10,10];
const ins2 = [0, 0, 0, 1, 2, 3, 3, 3, 3, 10, 10]
console.log(findNumber(ins2,3))
