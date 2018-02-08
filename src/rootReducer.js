import { combineReducers } from 'redux'
import { SET_LANGUAGE } from './constants';

const initialState = {
    name: 'eng',
}
function languageReducer(state = initialState, action) {
    const { type, name } = action

    switch(type) {
        case SET_LANGUAGE:
            return {
                ...state,
                name,
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    language: languageReducer,
})

export default rootReducer