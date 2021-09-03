import { createStore } from 'redux'
import rootReducer from './rootReducers'

const store = createStore(rootReducer)

export default store;