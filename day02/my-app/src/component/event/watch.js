class EventBus{
    constructor(){
        this.events = {};
    }
    on(eventName,ck){
        if(this.events[eventName] instanceof Array){
            this.events[eventName].push(ck)
        }else{
            this.events[eventName] = [ck];
        }
    }

    emit(eventName,...arg){
        this.events[eventName] && this.events[eventName].forEach(item => {
            item(...arg);
        })
    }
}

export default new EventBus();
// let $bus = new EventBus();

// $bus.on('init',(color1,color2) => {
//     console.log(color1)
// })

// $bus.on('init',(color1,color2) => {
//     console.log(color2)
// })

// $bus.emit('init','red','green')


// $bus.on('事件名1',() => {

// })

// $bus.on('事件名2',() => {

// })

// $bus,emit('事件名','red','blue')