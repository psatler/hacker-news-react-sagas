import { combineReducers } from 'redux'
import storyReducer from './story'
import archiveReducer from './archive'

export default combineReducers({
    storyReducer,
    archiveReducer,
})
