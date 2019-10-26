import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import shops from './shops.reducer'

let reducer = combineReducers({
    shops
})

let store = createStore(reducer,applyMiddleware(thunk))

window.store = store;

export default store
