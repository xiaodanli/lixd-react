import {createStore,combineReducers,applyMiddleware} from 'redux'
import typeReducer from './type/type.reducer'
import car from './car/car.reducer'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
console.log(thunk)

let reducer = combineReducers({
    typeReducer,
    car
})

// let logger = createLogger()

let store = createStore(reducer)

window.store = store;

let next = store.dispatch;

store.dispatch = (fn,right) => {
    let action = fn && fn(right)
    next(action)
}

export default store