let num = (state=0,action) => {
    switch (action.type) {
        case 'ADD':
            state += action.steup
            break;
        case 'DIS':
            state -= action.steup;
            break;
        default:
            break;
    }
    return state
}

export default num