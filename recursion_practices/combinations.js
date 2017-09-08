 /**
 * Created by lee on 8/30/17.
 */


 function conbination(n,k) {
     var output = [];

     if(n <= 0 || k <= 0 || k > n) return res;

     function generateCombinations(n ,k, start,c) {
         console.log(' start', start,'output-start',output,' c',c);
         if(c.length == k) {
             output.push(c.slice(0));
             return;
         }

         for(var i = start; i <= n; i++) {
             c.push(i);
             console.log('start', start,'output-for-start',output,' c',c);
             console.log('enter recursion ' + (i+1) +' -------');
             generateCombinations(n,k,i+1,c);
             console.log('out recursion ' + (i+1) + ' i = ' + i+' -------');
             c.pop();
             console.log(' start', start,'output-end',output,' c',c , ' i= ', i);
         }

         return;
     }

     generateCombinations(n,k,1,[]);
     return output;
 }

 console.log(conbination(4,2));