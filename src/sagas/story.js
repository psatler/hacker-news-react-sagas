//  Basically you have one action to activate the side-effect that is handled with Redux Saga and one action that stores the result of the side-effect in the Redux store.

import { call, put } from 'redux-saga/effects'
import { doAddStories } from '../actions/story'

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = query => 
    fetch(HN_BASE_URL + query)
        .then( response => response.json());

// generator function
function* handleFetchStories(action) {
    const { payload: query } = action;
    const result = yield call(fetchStories, query);
    yield put(doAddStories(result.hits))
}

export {
    handleFetchStories
}
