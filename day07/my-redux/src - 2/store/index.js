import {createStore} from 'redux'

let data = {
    list:[
        {
            name:"螺旋焊钢",
            id:0
        },
        {
            name:"角钢",
            id:1
        },
        {
            name:"热镀锌",
            id:2
        },
        {
            name:"首钢",
            id:3
        }
    ],
    chooseList:[]
}

let reducer = (state=data,action) => {
    let newState = {list:[...state.list],chooseList:[...state.chooseList]};
    switch (action.type){
        case 'RADIO':{
            let {list,chooseList} = newState;
            let {index} = action;
            chooseList.splice(0,1,list[index])
            break;
        }
        case 'CHECKBOX':{
            //判断是否存在 
            let {list,chooseList} = newState;
            let {index} = action;
            chooseList.push(list[index])
            break;
        }
        case 'NUM':{
            newState.num = obj;
            break;
        }
        default :
            break;
    }
    return newState
}

let store = createStore(reducer)

window.store = store;

export default store