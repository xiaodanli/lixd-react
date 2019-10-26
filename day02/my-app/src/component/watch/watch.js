class EventBus{
    constructor(){
        this.events = {}
    }
    on(eventName,ck){
        if(!this.events[eventName]){
            this.events[eventName] = [ck]
        }else{
            this.events[eventName].push(ck);
        }
    }
    
    emit(eventName,...arg){
        this.events[eventName] && this.events[eventName].forEach(item => {
            item(...arg)
        })
    }
}

export default  new EventBus();

