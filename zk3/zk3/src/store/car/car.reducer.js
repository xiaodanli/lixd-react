import {CHANGE_ALL,CHANGE_CHECK,CHANEG_NUM,ADD_PRO} from './car.actionType'
//获取索引
function getInd(data,id){
    return  data.findIndex(item => item.id === id);
}

//计算总价
function totalMoney(data){
    return data.reduce((pre,cur) => {
        pre += cur.checked ? cur.num*cur.price : 0;
        return pre
    },0)
}
let car = (state={car:[],totalMoney:0,checkAll:false},action) => {
    // let newState = JSON.parse(JSON.stringify(state))  //深拷贝
    switch (action.type) {
        case ADD_PRO:{
            //1.从未购买过   2.购买过
            let index = getInd(state.car,action.detail.id);
            if(index !== -1){
                state.car[index].num++;
                state.car[index] = {...state.car[index]}
            }else{
                //没购买
                action.detail.num = 1;
                action.detail.checked = false;
                state.checkAll = false;
                state.car.push(action.detail)
            } 
            return {...state,car:[...state.car]}
        }
        case CHANEG_NUM:{
            let index = getInd(state.car,action.id);
            let target = state.car[index];
            target.num = action.num;
            state.car[index] = {...target}
            state.totalMoney = totalMoney(state.car);
            return {...state,car:[...state.car]}
        }
        case CHANGE_CHECK:{
            let index = getInd(state.car,action.id);
            let target = state.car[index];
            target.checked = action.checked;
            state.car[index] = {...target};
            state.totalMoney = totalMoney(state.car);
            state.checkAll = state.car.every(item => item.checked);
            return {...state,car:[...state.car]}
        }
        case CHANGE_ALL:{
            state.checkAll = action.checked;
            let changeArr = state.car.map(item => {
                item.checked = action.checked;
                return {...item}
            })
            state.totalMoney = totalMoney(state.car);
            return {...state,car:[...changeArr]}
        }
        default:
            return state;
    }
}
export default car