/**
 * Created by lee on 9/27/17.
 */

function Workflow() {
    this.name = arguments[0];
    this.state = "init";
    this.stateStack = [];
    this.stateMachine = {};
}

Workflow.prototype.addState = function (state) {
    this.stateStack.push(state);
}

Workflow.prototype.addAction = function (state, obj) {
    if(this.stateMachine.hasOwnProperty(state)){
        this.stateMachine[state].push(obj);
    } else {
        this.stateMachine[state] = [obj]
    }
}


Workflow.prototype.execute = function (state) {
    if(this.stateMachine.hasOwnProperty(state)){
        var size = this.stateMachine[state].length;
        for(var i = 0; i < size; i++) {
            if(this.stateMachine[state][i] !== null && this.stateMachine[state][i].from == this.state) {
                this.state = this.stateMachine[state][i].to;
            }
        }
    }
}

var workflow = new Workflow("Simple Test");

workflow.addState("init");
workflow.addState("termial");
workflow.addAction("start", { from: "init", to: "termial"});
workflow.addAction("reset", { from: "termial", to: "init"});

console.log(workflow.state); // print: init
workflow.execute("start");
console.log(workflow.state); // print: termial
workflow.execute("reset"); // print: init
console.log(workflow.state); // print: termial
