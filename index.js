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
String.prototype.findBetween = function(start,end){
    let s=this.indexOf(start)
    if(s===-1){
        return undefined
    }
    let e=this.lastIndexOf(end)
    if(e===-1){
        return undefined
    }
    if(s+1>=e){
        return undefined
    }
    return this.substring(s+1,e)
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