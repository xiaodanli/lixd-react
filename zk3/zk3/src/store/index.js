import {createStore,combineReducers,applyMiddleware} from 'redux'
import typeReducer from './type/type.reducer'
import car from './car/car.reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

console.log(applyMiddleware)

//  redux-thunk  redux-logger

let reducer = combineReducers({
    typeReducer,
    car
})

let store = createStore(reducer,applyMiddleware(thunk,logger))

window.store = store;

// store.dispatch   
// let next = store.dispatch;  //真 dispatch

// store.dispatch = (plain) => {  //假dispatch
//     if(typeof plain === 'function'){
//         plain(next)
//     }else{
//         next(plain)
//     }
    
//     // let action = fn && fn()
//     // next(action)
// }

export default store