import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'

import * as rootReducer from '../reducers'

function configureStore(history, initialState) {

  const reducer = combineReducers({
    ...rootReducer,
    routing: routerReducer
  })

  const enchancer = compose(
    applyMiddleware(
      createLogger(),
      thunkMiddleware,
      routerMiddleware(history)
    )
  )

  return createStore(reducer, initialState, enchancer)

}

export default configureStore
