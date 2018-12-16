import { takeEvery, all } from 'redux-saga/effects'
import { STORIES_FETCH } from '../constants/actionTypes'
import { handleFetchStories } from './story' // importing the generator

// watches all sagas activated
function *watchAll() {
    yield all([
        takeEvery(STORIES_FETCH, handleFetchStories),
    ])
}

export default watchAll;