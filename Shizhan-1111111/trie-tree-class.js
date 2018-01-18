function TireNode(key) {
    return {
        key: key,
        isWord: false,
        children: {}
    }
}

class Trie {
    constructor() {
        this.root = new TireNode();
    }

    insert(word) {
        let tree = this.root;
        let cur="", i=0;
        for(i = 0; i < word.length; i++) {
            cur = word[i];
            if(!tree.children[cur]) {
                tree.children[cur] = new TireNode(cur);
            }
            tree = tree.children[cur];
        }

        tree.isWord = true;
    }

    predicword(word) {
        let lastnode = this.findLastNode(word);
        console.log(lastnode);
        let allWords = [];
        return this.worldHelper(word,lastnode,allWords);

    }

    findLastNode(word) {
      let rootnode = this.root;
   while(word.length > 0 && rootnode.children[word[0]]) {
           rootnode = rootnode.children[word[0]];
           word = word.substr(1);
   }
   return rootnode;
    }

    worldHelper(strSoFar, tree, allWords=[]) {

        for(let k in tree.children) {
            const childObj = tree.children[k];
            let newString  = strSoFar + childObj.key;
            if(childObj.isWord) {
                allWords.push(newString);
            }
            this.worldHelper(newString,childObj,allWords);
        }
        return allWords;
    }

}

var root = new Trie();
root.insert("hello");
root.insert("yellow");
root.insert("yeabc");
root.insert("yebcd");

console.log(root.predicword('ye'))
