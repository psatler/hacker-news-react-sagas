import { STORIES_ADD, STORIES_FETCH } from '../constants/actionTypes'

const doAddStories = stories => ({
    type: STORIES_ADD,
    payload: stories,
});

// This action is only used to activate the saga in root saga
const doFetchStories = query => ({ 
    type: STORIES_FETCH,
    payload: query,
});

export {
    doAddStories,
    doFetchStories,
};