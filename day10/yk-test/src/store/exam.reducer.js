import {INIT_DATA,CHANGE_INDEX,CHOOSE_ITEM,SUBMIT} from './exam.type'
//初始的state
let data = {
    data:[],     //题目列表
    curdata:{},  //当前的题
    index:0,     //当前题的下标
    length:0,     //题目的长度
    startTime:0,  //开始的时间
    endTime:0,    //结束的时间
    tip:'',       //时长
    rightNum:0    //答对的数量
}
let exam = (state=data,action) => {
    // let newData = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case INIT_DATA:{
            state.data = action.data;
            state.curdata = action.data[state.index];
            state.length = state.data.length;
            state.startTime = new Date().getTime();
            return {...state,data:[...state.data],curdata:{...state.curdata}}
        }
        case CHANGE_INDEX:{
            let {index} = action;
            state.index = index;
            state.curdata = state.data[state.index];
            return {...state,curdata:{...state.curdata}};
        }
        // 选择选项
        case CHOOSE_ITEM:{
            let {id} = action;
            let {index} = state;
            state.data[index].selected = id;
            
            return {...state,curdata:{...state.data[index]}}
        }
        case SUBMIT:{
            state.endTime = new Date().getTime();
            let time = (state.endTime - state.startTime)/1000;  //秒
            //分 秒
            let min  =  Math.floor(time/60);  //50
            let second =  time - min * 60;
            state.tip = `${min}分${second}秒`;
            state.rightNum = state.data.reduce((pre,cur) => {
                pre += cur.selected === cur.success ? 1 : 0;
                return pre
            },0)
            return {...state}
        }
        default:
            return state
    }    
}

export default exam