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
 * 广度优先，他的回溯点都是，最近的路径
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

    //广度优先算法：
    //d 距离
    //pred 回溯点
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

        //short path:
        //initial 
        let distance = {};
        let pred = {};
        for(let i = 0; i < vertics.length; i++) {
            distance[vertics[i]] = 0;
            pred[vertics[i]] =  null;
        }

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

                    //设置回溯点
                    pred[subDingdian] = now;
                    distance[subDingdian] = distance[now] + 1;

                    queue.push(subDingdian);
                }
                //已发现的点就不需要入列了
            }
            color[now] = 'black';
            if(callback) {
                callback(now);
            }
        } 
        return {
            pred,
            distance
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
testGraph.addEdges('A', 'B');
testGraph.addEdges('A', 'C');
testGraph.addEdges('A', 'D');
testGraph.addEdges('B', 'E');
testGraph.addEdges('B', 'F');
testGraph.addEdges('C', 'D');
testGraph.addEdges('D', 'F');


// testGraph.print();
// console.log(testGraph.bfs('A'));

//广度优先算法的天然的 能解决的最短路径，进行遍历的时候是最短的；
let shortPath = function(from, to) {
    let path = testGraph.bfs('A');
    let current = to;
    let pathRecord = [];
    while(current !== from) {
        console.log('current',current, 'from', from, 'to', to);
        pathRecord.push(current);
        current = path.pred[current];
    }
    pathRecord.push(current);
    console.log(pathRecord.reverse());
}

//必须从顶点到端点，不能从端点到顶点
shortPath('A','F');