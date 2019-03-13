import {combineReducers} from 'redux';
import {cloneDeep} from 'lodash';

const initialState = {
    something: 'something'
}

const todoReducer = (state = initialState, action: {type: string, payload: {} | any}) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, text: action.payload.text, timeStamp: action.payload.timeStamp}
        case 'REMOVE_TODO':
            const newState = cloneDeep(state)
            delete newState['text']
            return {...newState}
        default:
            return state
    }
}

export default combineReducers({todo: todoReducer})