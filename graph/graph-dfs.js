/**
 * dfs 是用树的结构去遍历的
 * 看成一个分散的 树结构
 */

 /**
 * Class is a ajust table
 */
const Graph = function() {
    // store all vertex
    var vertics = [];
    // store vertics edage
    var adjList = {}

    //add vertics
    this.addVertics= function(vertex){
        vertics.push(vertex);
        adjList[vertex] = [];
    }

    //add edges
    this.addEdges = function(firstVertex, secondVertex) {
        // undirected graph
        adjList[firstVertex].push(secondVertex);
        adjList[secondVertex].push(firstVertex);
    } 

    this.print = function() {
        var s = '\n';

        for(let i = 0; i < vertics.length; i++) {
            let dingdian = vertics[i];
            s += (dingdian + "=> ");
            let edage = adjList[dingdian];
            // console.log('edage',edage);
            for(let j = 0; j<edage.length; j++) {
                // console.log('edage',edage);
                s += edage[j];
            }
            s += '\n'
         }
        console.log('graph:', s);
    }
    //white: 未发现， gray: 未探索， black: 以探索
    var initColor = function() {
        return vertics.reduce((memo,element)=>{return {...memo, [element]:"white"}}, {})
    }

    var dfsVisite = function(u, color,callback) {
        color[u] = 'gray';
        let n = adjList[u]; //获取所有的邻居
        for(var i = 0; i< n.length; i++) {
            let w = n[i];
            if(color[w] == "white") {
                dfsVisite(w, color, callback);
            }
        }
        color[u] = 'black';
        if(callback) {
           callback(u) 
        }
    }

    this.dfs = function(v, callback) {
        var color = initColor();
        dfsVisite(v, color, callback);
    }
}

const testGraph = new Graph();
testGraph.addVertics('A');
testGraph.addVertics('B');
testGraph.addVertics('C');
testGraph.addVertics('D');
testGraph.addVertics('E');
testGraph.addVertics('F');
testGraph.addEdges('A', 'B');
testGraph.addEdges('A', 'C');
testGraph.addEdges('A', 'D');
testGraph.addEdges('B', 'E');
testGraph.addEdges('B', 'F');
testGraph.addEdges('C', 'D');


testGraph.dfs('A', (e)=>console.log(e));