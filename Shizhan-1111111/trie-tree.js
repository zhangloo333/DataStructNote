/**
 * Created by lee on 10/10/17.
 */

/** trie node class
 * @param {string}
 */

var TrieNode = function(key) {
    return {
        key: key,
        isWord: false,
        children: {},
    }
};
/**
 * trie tree class
 */

var Trie = function () {
    this.root = TrieNode();
}

/**
 * insert method
 */

Trie.prototype.insert = function (word) {
    var tree = this.root;
    var cur,i;
    for(i = 0; i < word.length; i++) {
        cur = word[i];
        if(!tree.children[cur]) {
            tree.children[cur] = new TrieNode(cur);
        }
        tree = tree.children[cur];
    }
    tree.isWord = true;
}


Trie.prototype.search = function (word) {
    var tree = this.root;

    for(var i = 0; i < word.length; i++) {
        var cur = word[i];
        if(!tree.children[cur]) {
            return false;
        }
        tree = tree.children[cur];
    }

    return tree.isWord;

}


Trie.prototype.startsWith = function(prefix) {
    var tree = this.root;

    for(var i = 0; i < prefix.length; i++) {
        var curr = prefix[i];

        if(!tree.children[curr]) {
            return false;
        }

        tree = tree.children[curr];
    }

    return true;
};

//怎么输出type-head 的预测
Trie.prototype.predicWord = function (word) {
    var allWords = [];
    var rootnode = this.root;
    var findLastNode = function (w) {
      while(w.length > 0) {
        if(rootnode.children[w[0]]){
            rootnode = rootnode.children[w[0]];
            w = w.substr(1);
        }
      }
      return rootnode;
    }

    var wordHelper = function (strSofar, tree) {
         for(let k in tree.children){
             const childObj = tree.children[k];
             var newString = strSofar + childObj.key;
             if(childObj.isWord){
                 allWords.push(newString);
             }
             wordHelper(newString,childObj);
         }
    }
     var lastNode = findLastNode(word);
     wordHelper(word,lastNode);
     return allWords;
}

var root = new Trie();
root.insert("hello");
root.insert("yellow");

console.log(root.search("yellow"));
console.log(root.startsWith("yel"));

console.log(JSON.stringify(root));
