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
testGraph.addEdges('A', 'B');
testGraph.addVertics('C');
testGraph.addEdges('C', 'B');
testGraph.addVertics('D');
testGraph.addEdges('C', 'D');
testGraph.addEdges('D', 'B');


testGraph.print();