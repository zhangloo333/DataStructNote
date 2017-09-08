/**
 * Created by lee on 9/7/17.
 */
class Runner{

    constructor(){
        // this.maxNum = num;
        this.queue = [];
        this.async =this.async.bind(this);
        this.run =this.run.bind(this);
    }

    add(task) {
        this.queue.push(task);
    }

    async(arg,callback){
        if(arg) {
            arg.call();
            setTimeout(function () {
                callback()
            }, 2000);
        }
    }

    run() {
        var self = this;

        if(this.queue.length !== 0) {
            self.async(self.queue.pop(),function () {
                self.run.call(self);
            })
        } else {
            console.log('finish');
        }
    }
}


var exampleTask1 = function() {
    console.log('job1');
}

var exampleTask2 = function() {
    console.log('job2');
}

var exampleTask3 = function() {
    console.log('job3');
}

var taskRunner = new Runner();

taskRunner.add(exampleTask1);
taskRunner.add(exampleTask2);
taskRunner.add(exampleTask3);

taskRunner.run();
