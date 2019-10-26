import {INIT_DATA,CHANGE_NUM,CHOOSE_ITEM} from './exam.type'
import axios from 'axios'
const initData = (url) => {
    return dispatch => {
        axios.get(url).then(res => {
            if(res.data.code === 1){
                let data = res.data.data;
                dispatch({type:INIT_DATA,data})
            }
        })
    }
}

const changeNum = (index) => {
    return {
        type:CHANGE_NUM,
        index
    }
}

const chooseItem = (id) => {
    return {
        type:CHOOSE_ITEM,
        id
    }
}

export default {
    initData,
    changeNum,
    chooseItem
}