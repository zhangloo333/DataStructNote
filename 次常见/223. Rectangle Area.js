/**
 * Created by leizha on 3/9/17.

 计算总正方行所占的面积：
 叫考虑到正方情的相交情况，
 正方形，相交，或者两相离。
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    var a1 = Math.abs(A-C) * Math.abs(B-D);
    var a2 = Math.abs(E-G) * Math.abs(F-H);

    /**
     * 不相交的情况：
     两种情况，最低的点比最高的点大，
     最高点的点，比最低点小
     */

    if( A >= G || B >= H || C <= E || D <= F){
        return r1+r2;
    }

    // 計算重疊的部分
    var rD = Math.abs( (Math.max(A,E) - Math.min(C,G)) * (Math.max(B,F) - Math.min(D,H)) )
    return r1+r2 - rD;

};