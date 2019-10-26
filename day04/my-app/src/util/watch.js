class EventBus{
    constructor(props){
        this.events = {} //{事件名:[()={}]}
    }
    on(eventName,ck){
        if(!this.events[eventName]){
            this.events[eventName] = [ck]
        }else{
            this.events[eventName].push(ck);
        }
    }   
    emit(eventName,...arg){
        this.events[eventName].forEach(item => {
            item(...arg)
        })
    }
}

export default new EventBus()

//发布订阅模式