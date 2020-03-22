/**
 * 图的三种方式：
 * 1.未发现， (山未发现这个点) 
 * 2.已发现， (发现了此点，但是未查找此点全部连接的节点)
 * 3.以探索 （一经发现此点连接的全部节点）
 * 
 * 用color 来表示这几个状态：
 * 1. white 未发现
 * 2. gray 已发现
 * 3. black 已发现
 * 
 * 队列： 
 * 
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
    this.bfs = function(v, callback) {
        let color = initColor();
        /**
         * color = [
         *  A: 'white',
         *  B: 'white',
         *  .....
         * ]
         */
        let queue = [];
        queue.push(v);
        while(queue.length > 0) {
            //出列
            let now = queue.shift()
            let bian = adjList[now];
            for(let i=0; i< bian.length; i++) {
                var subDingdian = bian[i];
                if(color[subDingdian] === 'white') {
                    // 未发现的全部入列，并且表示为已发现
                    //1.变成已发现，2 入列
                    color[subDingdian] = "gray";
                    queue.push(subDingdian);
                }
                //已发现的点就不需要入列了
            }
            color[now] = 'black';
            if(callback) {
                callback(now);
            }
        } 
    }
}

const testGraph = new Graph();
testGraph.addVertics('A');
testGraph.addVertics('B');
testGraph.addVertics('C');
testGraph.addVertics('D');
testGraph.addVertics('E');
testGraph.addVertics('F');
testGraph.addEdges('A', 'C');
testGraph.addEdges('A', 'D');
testGraph.addEdges('A', 'B');
testGraph.addEdges('C', 'D');
testGraph.addEdges('B', 'E');
testGraph.addEdges('B', 'F');


// testGraph.print();
testGraph.bfs('A', (p)=>console.log(p));
