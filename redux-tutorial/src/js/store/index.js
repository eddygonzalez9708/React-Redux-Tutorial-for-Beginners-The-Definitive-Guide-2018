import {
  createStore,
  applyMiddleware,
  compose } from 'redux'
import rootReducer from '../reducers/'
import { forbiddenWordsMiddleware } from '../middleware'
import createSagaMiddleware from 'redux-saga'
import apiSaga from '../sagas/api-saga'

// import thunk from 'redux-thunk'

const initialiseSagaMiddleware = createSagaMiddleware()

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(
      forbiddenWordsMiddleware,
      initialiseSagaMiddleware
      //thunk
  ))
)

initialiseSagaMiddleware.run(apiSaga)

export default store