/**
 * Created by lee on 10/28/17.
 */

function triangleSolver(arr) {
    if(arr.length < 3) return 0;

    var len = arr.length,
        i,j,k, count = 0;

    for(i = 0; i < len-2; i++) {
        for(j=i+1; j < len-1; j++) {
            for(k=j+1; k < len; k++) {
                if(arr[i] + arr[j] > arr[k] && arr[i] + arr[k] > arr[j] && arr[j] + arr[k] > arr[i]) {
                    count++;
                }
            }
        }
    }

    return count;
}