import {INIT_DATA,CHANGE_ADD,CUR_ADD,DEL_ITEM,CREATE,CLEAR,CHANGE_IPT} from './shops.types'

import axios from 'axios'
console.log(INIT_DATA);

const initData = () => {
    return dispatch => {
        axios.get('/api/list').then(res => {
            if(res.data.code === '200'){
                let data = res.data.msg.string;
                dispatch({type:INIT_DATA,data})
            }
        })
    }
}

const changeAddAction = (shopId,status) => {
    return {type:CHANGE_ADD,shopId,status}
}

const curAddAction = () => {
    return {type:CUR_ADD}
}

const delAction = (shopId) => {
    return {type:DEL_ITEM,shopId}
}

const createAction = (val) => {
    return {type:CREATE,val}
}

const clearAction = () => {
    return {type:CLEAR}
}

const changeIpt = (val) => {
    return {type:CHANGE_IPT,val}
}
export default {
    initData,
    changeAddAction,
    curAddAction,
    delAction,
    createAction,
    clearAction,
    changeIpt
}