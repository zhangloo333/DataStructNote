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


testGraph.print();