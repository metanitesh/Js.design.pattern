/* Promise - basic internals of promises API */

var Promise = function(){

    var done = [];
    var fail = [];

    this.done = function(fn){
        done.push(fn);
        return this;
    }

    this.failed = function(fn){
        fail.push(fn);
        return this;
    }

    this.resolve = function(result){
        done.forEach(fn => {
            fn(result);
        })
        return this;
    };

    
    this.fail =  function(){
        fail.forEach(fn => {
            fn(result);
        })
        return this;
    }
}




