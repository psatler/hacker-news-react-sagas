import { STORY_ARCHIVE } from '../constants/actionTypes'

const INITIAL_STATE = []

const archiveReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case STORY_ARCHIVE:
            return [
                ...state,
                action.payload,
            ]

        default:
            return state;
    }
}

export default archiveReducer;