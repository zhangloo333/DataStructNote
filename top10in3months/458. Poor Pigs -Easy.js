/**
 * Created by leizha on 1/31/17.
 * 怎么用最少的猪找到有毒的桶,
 * 这个题:主要是把数据怎么从一个array里面,编导一个matrix(2D)里面,然后怎么把数据从2D 上升成3D,然后到nD
 *
 * 其实就是 dimension = 给的总时间/死的时间 + 1(why +1 当所有都遍历完了还剩的那个)
 * dimiension 的 pig乘方
 *
 * power(dimimension, pig) < total bucket
 *
 */

function badPig(buckets, minToDie,minToTest) {

    if(buckets == 0) {
        return 0;
    }
    var pigs = 0;
    var dimension = minToTest/minToDie + 1;
    while(Math.pow(dimension,pigs) < buckets){
        pigs++;
    }
    return pigs;
}