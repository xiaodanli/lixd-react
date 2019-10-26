import {INIT_DATA,CHANGE_ADD,CUR_ADD,DEL_ITEM,CREATE,CLEAR,CHANGE_IPT} from './shops.types'

let data = {
    data:[], // 餐厅列表
    love:[],  //喜欢的餐厅列表
    list:[],   //生成的投票列表   {title:'',time:''}
    val:''  //input的值
}
let shops = (state=data,action) => {
    console.log("======",action)
    switch (action.type) {
        case INIT_DATA:{
            state.data = action.data.map(item => {
                item.status = false;
                return item
            });
            return {...state,data:[...state.data]}
        }
        case CHANGE_ADD:{
            let {shopId,status} = action;
            let ind = state.data.findIndex(item => item.shopId === shopId);
            state.data[ind].status = status;
            state.data[ind] = {...state.data[ind]};
            return {...state,data:[...state.data]}
        }
        case CUR_ADD:{
            state.love = state.data.filter(item => item.status);
            return {...state,love:[...state.love]}
        }
        case DEL_ITEM:{
            let {shopId} = action;
            let ind = state.love.findIndex(item => item.shopId === shopId);
            state.love.splice(ind,1);
            state.data.forEach(item => {
                if(item.shopId === shopId){
                    item.status = false;
                    item = {...item}
                }
            })
            return {...state,love:[...state.love],data:[...state.data]};
        }
        case CREATE:{
            let {val} = action;
            let time = new Date().toLocaleDateString();
            state.list.push({val,time});
            return {...state,list:[...state.list]}
        }
        case CLEAR:{
            state.love.splice(0);
            state.data.forEach(item => {
                item.status = false;
                item = {...item}
            })
            state.val = '';
            return {...state,love:[...state.love],data:[...state.data]}
        }
        case CHANGE_IPT:{
            state.val = action.val;
            return {...state}
        }
        default:
            return {...state}
    }
    
}

export default shops