const defaultState = {
    num:0
}

const reducer = (state=defaultState,action) =>{
    let newState = JSON.parse(JSON.stringify(state))
    console.log(action)
    switch (action.type) {
        case "ADD":
            newState.num++
            
            break;
        case "DIS":
            newState.num--
            
            break;
    
        default:
            break;
    }

    return newState
}

export default reducer
