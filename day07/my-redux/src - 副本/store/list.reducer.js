let list = (state=[],action) => {
    // let newState = [...state];
    switch (action.type) {
        case 'ADD_MSG':
            state.push(action.msg);
            return [...state]
        case 'DEL_MSG':
            state.splice(action.ind,1);
            return [...state]
        default:
            return state
    }
}

export default list