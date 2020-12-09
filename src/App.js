import {createStore, applyMiddleware } from 'redux'

const middleware1 = store => next => action => {
  const result = next(action)
  return result
}

const middelware2 = store => next => action => {
  const result = next(action)
}

const myReducer = (state, action) => {
  return state;
}

const store = createStore(myReducer, applyMiddleware(middleware1, middelware2));