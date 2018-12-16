import { STORIES_ADD } from '../constants/actionTypes'

const INITIAL_STATE = [];

const storyReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case STORIES_ADD:
          return state.concat(action.payload)
        default:
          return state
    }
}

export default storyReducer;