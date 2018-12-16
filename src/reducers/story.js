import { STORIES_ADD, STORIES_FETCH_ERROR } from '../constants/actionTypes'

const INITIAL_STATE = {
  stories: [],
  error: null,
};

const storyReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case STORIES_ADD:
          // return state.concat(action.payload)
          return {
            stories: action.payload,
            error: null,
          }
        case STORIES_FETCH_ERROR:
          return {
            stories: [],
            error: action.payload,
          }
        default:
          return state
    }
}

export default storyReducer;