//  Basically you have one action to activate the side-effect that is handled with Redux Saga and one action that stores the result of the side-effect in the Redux store.

import { call, put } from 'redux-saga/effects'
import { doAddStories, doFetchErrorStories } from '../actions/story'
import * as API from '../api/story'; // api endpoint for fetching

// generator function
function* handleFetchStories(action) {
    try{
        const { payload: query } = action;
        const result = yield call(API.fetchStories, query);
        yield put(doAddStories(result.hits))
    }
    catch (error){
        // console.log('error', error)
        yield put(doFetchErrorStories(error.message))
    }
}

export {
    handleFetchStories
}
