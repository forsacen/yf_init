const EventEmitter=require('events').EventEmitter
String.prototype.trimL = function (char) {
    return this.replace(new RegExp('^\\'+char+'+', 'g'), '')
}
String.prototype.trimR = function (char) {
    return this.replace(new RegExp('\\'+char+'+$', 'g'), '')
}
String.prototype.trimD = function (char) {
    return this.replace(new RegExp('^\\'+char+'+|\\'+char+'+$', 'g'), '')
}



EventEmitter.prototype.emitAsync=function(event,...args){
    return new Promise((resolve)=>{
        if(this._events[event]){
            if(typeof this._events[event]==='function'){
                this.emit(event,resolve,...args)
            }else{
                let count=this._events[event].length
                this.emit(event,()=>{
                    count--
                    if(count===0){
                        resolve()
                    }
                },...args)
            }
        }else{
            resolve()
        }
    })
}

EventEmitter.prototype.onAsync=EventEmitter.prototype.on