/*
0123...
abcd...z
cdef...b

a = c
b = d
c = e

bad -> dcf

Objective: Implement a function that takes in two strings. Output a boolean representing whether one of the strings could be the shift cipher encrypted version of the other string. Assume that all strings only contain the characters from 'a' to 'z'.

bad, dcf -> true
abc, bcd -> true
bad, dcg -> false

bad, dcf 

"b"-"d" = const1;
"a"-"c" = const2

b = d
a = c
d = f

var map1 = "abc..z";
var map2 = 

function validate(str1, str2) {
  str1.length !== str2.length
  
  for(var i - 0; i<str1.length; i++){
    if(map1.indexOf(str1[i]) !== map2.indexOf(str2[i])){
      return false
    }
  }
  
  return true;

}

str1 = "";




zab, abc -> true
25, -1, -1
24, -2
23, -3

26- 1 26/26 = 0
1 - 2 1%26 = 1 - 2 = -1
1 - 2
*/




var _ = require('underscore');

function sayHello() {
  console.log('Hello, World');
}

_.times(5, sayHello);


function validate(str1,str2) {
  if(!str1 || !str2 || str1.length !== str2.length) return false;
  if(str1 == "" && str2 == "") return false;
  
  let constCode = ((str1[0] - str2[0])+26)%26;// 
  

  for(var i= 1 ; i < str1.length; i++){
      if(((str1[i]-str2[i])+26)%26 !== constCode){
        return false;
      }
  }
  return true;
}


