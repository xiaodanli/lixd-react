import {CHANGE_ALL,CHANGE_CHECK} from './car.actionType'
const changeCheck = (id,checked) => {
    return {type:CHANGE_CHECK,id,checked}
}
const changeAll = (checked) => {
    return {type:CHANGE_ALL,checked}
}

export default {
    changeCheck,
    changeAll
}