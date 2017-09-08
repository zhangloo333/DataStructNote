/**
 * Created by lee on 8/31/17.
 */
var integerBreak = function(n) {

    function breakInteger(n1) {
        if(n1 == 1) return 1;

        res = -1;

        for(var i = 1; i <= n1-1; i++) {
            // console.log('res ',res, 'i*n1-1',i*(n1-1),'i',i,'n1-1',n1-1);
            res = Math.max(res,i*(n1-i),i*breakInteger(n1-i));
            // console.log('out',i*breakInteger(n1-1) );
        }
        return res;

    }

    return breakInteger(n);

};


console.log(integerBreak(3));