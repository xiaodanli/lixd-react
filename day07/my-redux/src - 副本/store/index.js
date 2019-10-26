import num from './num.reducer'
import list from './list.reducer'

let {createStore,combineReducers} = require('redux');

// console.log(redux)

// let reducer = (state={num:0,list:[]},action) => {
//     // console.log(action);
//     let newState = {...state,list:[...state.list]};
//     return {
//         num:num(newState.num,action),
//         list:list(newState.list,action)
//     }
// }

let reducer = combineReducers({
    num,
    list
})

// switch (action.type) {
//     case 'ADD':
//         newState.num += action.steup
//         break;
//     case 'DIS':
//         newState.num -= action.steup;
//         break;
//     case 'ADD_MSG':
//         newState.list.push(action.msg);
//         break;
//     case 'DEL_MSG':
//         newState.list.splice(action.ind,1);
//         break;
//     default:
//         break;
// }
// return newState
let store = createStore(reducer);

window.store = store;

export default store

// console.log(store);

// console.log(store.getState())

// store.dispatch({type:'ADD'})

// console.log(store.getState())

// store.dispatch({type:'ADD'})

// console.log(store.getState())

// store.dispatch({type:'DIS'})

// console.log(store.getState())



