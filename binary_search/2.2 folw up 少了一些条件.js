/**
 * Created by leizha on 11/28/16.
 */
/**
 * Created by leizha on 11/28/16.
 * matrix - 给一个matrix， 有两个特性： 每一行都是单调递增的。每一列都是单调递增的；
 * 给出一个数，如果找到了就返回 true 否则就返回 false
 * input: 2D array
 * out: false/true
 * conner case: null/empty --- output false
 *
 * binary search 的核心是什么： 就是能最大限度的丢掉一半来减少范围；
 *
 * 解题思路：
 * 怎么缩小一个matrix。怎么取matrix的 submatrix。
 * 决定一个matrix的大小， 只要取 他的 start point 和 end point， 从他的start point 必须是递增的到 end point
 *
 * 用recursion来做。 不断的把一个大的matrix分割成小的matrix，看有没有，所有的小matrix 都没有(逻辑与)
 *
 */