import { combineReducers } from 'redux'
import mainSlice from './Main/slice'

const pagesReducer = combineReducers({
  main: mainSlice,
})

export default pagesReducer
