import {INIT_RIGHT} from './type.actionType'
let type = (state={right:[]},action) => {
    switch (action.type) {
        case INIT_RIGHT:
            state.right = action.right
            return {...state}
        default:
            return state;
    }
}

export default type