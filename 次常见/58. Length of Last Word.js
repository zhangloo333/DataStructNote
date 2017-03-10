/**
 * Created by leizha on 3/9/17.
 trim() 除去前后的空格； 然后确定中间最后一个 " "的index，index+1就是前面的长度，
 trim 后的总长度 - 前面一段 = 最后一个word的长度；
 */

var lengthOfLastWord = function(s) {
    return s.trim().length-s.trim().lastIndexOf(" ")-1;
};