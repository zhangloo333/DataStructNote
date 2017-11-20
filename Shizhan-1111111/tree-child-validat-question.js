/**
 * Created by lee on 9/14/17.
 */
function getElementsByClassName (className,root) {
    var nodeList = [];

    function validate(node) {
        if(node.classList && node.classList.contains(className)) {
            nodeList.push(node);
        }

        for(var i = 0; i < node.childNodes.length; i++) {
            validate(node.childNodes[i]);
        }

    }

    validate(root);
    return nodeList;
}

function getClassObj(parent,className){
    var obj=parent.getElementsByTagName('*');//获取 父级的所有子集
    var pinS=[];//创建一个数组 用于收集子元素
    for (var i=0;i<obj.length;i++) {//遍历子元素、判断类别、压入数组
        if (obj[i].className==className){
            pinS.push(obj[i]);
        }
    };
    return pinS;
}