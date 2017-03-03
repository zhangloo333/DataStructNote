/**
 * Created by leizha on 3/2/17.
 * return n/5 + n/25 + n/125 + n/625 + n/3125+...;
 *
 public int trailingZeroes(int n) {
    int power = 1;
    int c = 0;
    int f = (int) (n/(Math.pow(5, power)));

    while(f > 0){
        c += f;
        f = (int) (n/(Math.pow(5, ++power)));
    }

    return c;
}
 怎么记： n 不停的 n/5 然后加以；
 */


var trailingZeroes = function(n) {
    if(n < 5) return 0;

    var count = 0;

    while(n >= 5){
        count += Math.floor(n/5);
        n = Math.floor(n/5);
    }

    return count;
};
