import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

// importing redux-saga
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const logger = createLogger()
const saga = createSagaMiddleware()
const middleware = [saga, logger]

// hooking up redux inside the browser (Google Chrome)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(...middleware)
  )
)

saga.run(rootSaga)

export default store;