// Code goes here

//Simple JavaScript
/*var work = function(){
  
  console.log("working hard!");
  
};

var doWork = function(f){
  
  console.log("starting");
  try{
    f();
  }
  catch(ex){
    console.log(ex);
  }
  console.log("end");
  
};

doWork(work);*/

//
//Modules
//
/*var createWorker = function(){
  
  var workCount = 0;
  
  var task1 = function(){
    workCount += 1;
    console.log("task1 " + workCount);
  };
  
  var task2 = function(){
    workCount += 1;
    console.log("task2 " + workCount);
  };
  
  return {
    job1: task1,
    job2: task2
  };
  
};

var worker = createWorker();

worker.job1();
worker.job2();*/
//problem: global variables!

//reduce the number of global variables to 1
/*var program = function() {
  var createWorker = function() {

    var workCount = 0;

    var task1 = function() {
      workCount += 1;
      console.log("task1 " + workCount);
    };

    var task2 = function() {
      workCount += 1;
      console.log("task2 " + workCount);
    };

    return {
      job1: task1,
      job2: task2
    };

  };

  var worker = createWorker();

  worker.job1();
  worker.job2();
  worker.job2();
  worker.job2();
};
program();*/
//problem: still one global variable exists. How can we not use any global variable at all?

//no global variable
//Immediately invoked function expression (IIFE)
//function calls itself to start
(function() {
  var createWorker = function() {

    var workCount = 0;

    var task1 = function() {
      workCount += 1;
      console.log("task1 " + workCount);
    };

    var task2 = function() {
      workCount += 1;
      console.log("task2 " + workCount);
    };

    return {
      job1: task1,
      job2: task2
    };

  };

  var worker = createWorker();

  worker.job1();
  worker.job2();
  worker.job2();
  worker.job2();
}());