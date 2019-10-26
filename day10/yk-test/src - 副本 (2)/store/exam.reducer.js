import {INIT_DATA,CHANGE_NUM,CHOOSE_ITEM} from './exam.type'
function setData(data){
    let arr = ['A','B','C','D'];
    return data.map((item,ind) => {
        item.text = `${arr[ind]}、${item.text}`
        return item
    })
}
let exam = (state={data:[],curdata:{},index:0,length:0},action) => {
    // let newData = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case INIT_DATA:{
            state.data = action.data;
            state.curdata = action.data[state.index];
            state.curdata.options = [...setData(state.curdata.options)];
            state.length = state.data.length;
            return {...state,data:[...state.data],curdata:{...state.curdata}}
        }
        case CHANGE_NUM:{
            let {index} = action;
            state.index = index;
            state.curdata = state.data[index];
            return {...state,curdata:{...state.curdata}}
        }
        case CHOOSE_ITEM:{
            let {id} = action;
            let {index,length,curdata} = state;
            // console.log(length)
            state.data[index].selected = id;
            console.log(state.data[index],index)
            state.index = index === length-1 ? length - 1: index+1;
            console.log(state.index);
            curdata = state.data[state.index];
            return {...state,curdata:{...curdata}}
        }
        default:
            return state
    }    
}

export default exam