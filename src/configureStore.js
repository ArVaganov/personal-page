import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './rootReducer'

export function configureStore(initialState = {}) {
    const middlewares = []

    const composeEnhancers = typeof window !== undefined && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

    const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(...middlewares)));

    return store;
}