import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer, rootSaga } from './configureStore'

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose

const sagaMiddleware = createSagaMiddleware()

const initialState = {}

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)

const store = createStore(rootReducer, initialState, enhancer)

sagaMiddleware.run(rootSaga)

export default store