import {createStore,combineReducers} from 'redux'
import typeReducer from './type/type.reducer'
import car from './car/car.reducer'

let reducer = combineReducers({
    typeReducer,
    car
})

let store = createStore(reducer)

window.store = store;


let next = store.dispatch;  //真dispatch

// store.dispatch = (action) => {  //假的dispatch
//     console.log("prev",store.getState())
//     next(action)
//     console.log("next",store.getState())
// }

store.dispatch = (fn) => {  //假的dispatch
    console.log("prev",store.getState())
    if(typeof fn === 'function'){
        fn(next)
    }else{
        next(fn);
    }
   
    console.log("next",store.getState())
}

// store.dispatch = (plain) => {
//     if(typeof plain === 'function'){
//         plain(next);
//     }else{
//         next(plain)
//     }
// }

export default store