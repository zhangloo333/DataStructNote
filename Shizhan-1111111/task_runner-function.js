/**
 * Created by lee on 9/7/17.
 */

function Runner() {

    this.queue = [];
    this.timeSlot = [1000,2000,3000]

    this.add = function(task) {
        this.queue.push(task);
    }

    this.async = function(arg,callback,time){
        if(arg) {
            arg.call();
            setTimeout(function () {
                callback()
            }, time);
        }
    }

    this.run = function() {
        var self = this;

        if(self.queue.length) {
            var time = self.timeSlot.pop();
            self.async(self.queue.pop(),function () {
                return self.run.call(self);
            }, time)
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
