import { configureStore } from '@reduxjs/toolkit'
import { eventReducer } from './reducers/eventreducer'

export default configureStore({
  reducer: {
    events: eventReducer
  }
})