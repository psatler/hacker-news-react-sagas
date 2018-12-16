import { STORIES_ADD, STORIES_FETCH, STORIES_FETCH_ERROR } from '../constants/actionTypes'

const doAddStories = stories => ({
    type: STORIES_ADD,
    payload: stories,
});

// This action is only used to activate the saga in root saga
const doFetchStories = query => ({ 
    type: STORIES_FETCH,
    payload: query,
});

const doFetchErrorStories = error => ({
    type: STORIES_FETCH_ERROR,
    payload: error,
})

export {
    doAddStories,
    doFetchStories,
    doFetchErrorStories
};