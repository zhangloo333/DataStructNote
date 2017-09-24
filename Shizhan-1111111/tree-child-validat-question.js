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