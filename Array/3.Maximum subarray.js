/**
 * Created by leizha on 12/2/16.
 * given an integer array,找出一个连续的subarray 每个元素相加 和最大 retrun 这个最大的sum
 * 这个subarray里面 at lease 1 element
 *
 * input : array
 * return: sum / subarray 这个序列
 * couner case: 如果null input的情况下， 返回的是一个最小的number.min value
 * subarray： 用来个pointer就可以确定，一个头，一个尾部
 *
 * 首先解题的时候：
 *  先从最笨的方法来，
 *  看看从最笨的方法的时候，有没有重复的工作，如果有的话，我门省略了
 *  看看有没有一些没有意义的工作，我们明知道结果而且还是去做了。（如果发现的话，就可以把它省略）
 *
 *  每次复位的情况下
 *  poniter 1 指向 array【0】
 *  pointer 2 指向 array[0] 跟随pointer1复位
 *
 *
 *  如果从array【0】开始遍历的情况下sum 该开始就是个负数，then, pointer 1 向后移动一位 pointer2复位
 *  一旦 pointer2 在某一个位置上 sum<0 的情况下，这个位同时标记这个位，让pointer 1重新 到位置。pointer2 复位
 *
 *  直到pointer1 走到末尾。
 *
 *
 *
 */
