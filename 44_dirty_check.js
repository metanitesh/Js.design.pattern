/*dirty checking - basic version of angular's dirty check feature*/

var Scope = function(){
    this.watchCollection = []
    this.watchCollection.last = "";   
}

Scope.prototype = {

    watch(watchFn, listFn) {
        this.watchCollection.push({
            watcher: watchFn, 
            listener: listFn
        });        
    },

    digest() {
        this.watchCollection.forEach(watchObj => {

            var newVal = watchObj.watcher();
            var oldVal = this.watchCollection.last;

            if(newVal !== oldVal){
                this.watchCollection.last = newVal;
                watchObj.listener()    
            }
                        
        })
    }
}



var scope = new Scope();
scope.title = "nike";
var watchFn = () => scope.title

var listFn = () => {
   console.log("title changed");
}

scope.watch(watchFn, listFn);
