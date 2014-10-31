/*dirty checking - basic version of angular's dirty check feature*/

var Scope = function(){
    this.watchCollection = []
    this.watchCollection.last = "";   
}

Scope.prototype = {

    watch: function(watchFn, listFn){
        this.watchCollection.push({
            watcher: watchFn, 
            listener: listFn
        });        
    },

    digest: function(){
        this.watchCollection.forEach(function(watchObj){

            var newVal = watchObj.watcher();
            var oldVal = this.watchCollection.last;

            if(newVal !== oldVal){
                this.watchCollection.last = newVal;
                watchObj.listener()    
            }
                        
        }.bind(this))
    }
}



var scope = new Scope();
scope.title = "nike";
var watchFn = function(){
    return scope.title;
}

var listFn = function(){
   console.log("title changed");
}

scope.watch(watchFn, listFn);
