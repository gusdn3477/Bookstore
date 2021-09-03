  
import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from './types'

const initialState = {
    count : 0,
}

const subscriberReducer = (state = initialState, action) => {
    switch( action.type ) {
        case ADD_SUBSCRIBER:
            return {
                ...state.count,
                count : state.count + 1
            }
        case REMOVE_SUBSCRIBER:
            return {
                ...state.count,
                count : state.count - 1
            }
        default: return state
    }
}

export default subscriberReducer