/**
 * Created by lee on 8/28/17.
 */

var permute = function(nums) {

    var output = [];
    var used = new Array(nums.length).fill(false);


    function generatePermutation(renums, index, p){
        if(index == renums.length) {
            console.log("output start ",output, "p =" , p);
            var temp = p.slice(0);
            output.push(temp);
            console.log("output end ",output);

            return;
        }

        for(var i = 0 ; i < renums.length; i++) {
            if(!used[i]) {
                used[i] = true;
                p.push(renums[i]);
                console.log("output start1 ",output, "p", p, "c");
                generatePermutation(renums,index+1,p);
                console.log("output start2 ",output, "p", p, "c");
                p.pop();
                used[i] = false;
            }
        }

        return;
    }


    if(nums.length == 0) {
        return output;
    }

    generatePermutation(nums,0, []);

    return output;

};

var test = [1,2,3];
console.log(permute(test));