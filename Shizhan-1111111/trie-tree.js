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


var root = new Trie();
root.insert("hello");
root.insert("yellow");

console.log(root.search("yellow"));
console.log(root.startsWith("yel"));

console.log(JSON.stringify(root));

