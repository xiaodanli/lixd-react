import axios from 'axios'
import {INIT_DATA,CHANGE_INDEX,CHOOSE_ITEM,SUBMIT} from './exam.type'
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

const changeIndex = (index) => {
    return {type:CHANGE_INDEX,index}
}

const chooseItem = (id) => {
    return {type:CHOOSE_ITEM,id}
}

const submitAction = () => {
    return {type:SUBMIT}
}

export default {
    initData,
    changeIndex,
    chooseItem,
    submitAction
}