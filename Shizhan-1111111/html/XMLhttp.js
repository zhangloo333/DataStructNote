// var util = {};
// util.ajax1 = function() {
//   var xhr = XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
//   var opt = {
//     url: '',
//     type: 'GET',
//     data: {},
//   }
//
// }

var buildMatrix = function(m,n,init){
  return new Array(m).map(()=> new Array(n).fill(init));

}



var xhr = new XMLHttpRequest();
xhr.onload = function() {
	if(xhr.readyState  == 4) {
		if(xhr.status == 200) {
			// JSON.pares(xhr.responseText)
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
      alert(myObj);
		}
	}
}
xhr.open("GET","http://reduxblog.herokuapp.com/api/posts",false);
xhr.send();

xhr.onload();


// JSONp
//怎么动态的创造一个标签：
function createScript(url, charset) {
  var script = document.createElement('script');
  script.setAttribute('type','text/javascript');
  charset && script.setAttribute('charset',charset);
  script.setAttribute('src',url);
  script.async = true;
  return script;

}

//JSONP的写法
window.JSONP = function(url callback) {
  // 1 在windows 里面注册一个这个callback function
  callback = callback || 'callback';
  var result; // 用来保存结果的。

  return new Promise((resolve,reject) => {
    //create a script tag
    var reset;
    var scriptTag = document.createElement('script');
    scriptTag.src = url + '?callback=' + callback;

    //看当前的script是不是响应完成；
    scriptTag.onload = function() {
      if(reset == undefined){
        delete window[callback];
      } else {
        window[callback] = reset;
      }
      resolve(result);
    }

    window[callback] = function(data) {
      result = data;
    }
    //在你的html里面插入你刚才创造的 script标签
    documenT.getElementsByTagName('head')[0].appendChild(scriptTag);
  })
}


///
window.JSONP = function(url, callback){
  callback = callback || 'callback';
  var result;
  return new Promise((resolve, reject) => {
    var overwritten;
    var scriptEl = document.createElement('script');
    scriptEl.src = url + '?callback=' + callback;
    //加载完成后，删除callback
    scriptEl.onload = function(){
      if(overwritten === undefined){
        delete window[callback];
      }else{
        window[callback] = overwritten;
      }
      resolve(result);
    }
    //挂载一个callback到window上
    overwritten = window[callback]; //先保存一个，用完之后再还原
    window[callback] = function(data){
      result = data
    }
    document.head.appendChild(scriptEl);
  });
};

window.JSONP('http://localhost:9999/abc').then((data) => {
  console.log(data);
});
