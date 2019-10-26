import {createStore,combineReducers,applyMiddleware} from 'redux'

import exam from './exam.reducer'

import thunk from 'redux-thunk'

let reducer = combineReducers({
    exam
})

let store = createStore(reducer,applyMiddleware(thunk));

export default store