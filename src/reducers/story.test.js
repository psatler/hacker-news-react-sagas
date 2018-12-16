import storyReducer from './story'
import { doAddStories } from '../actions/story'
import { STORIES_ADD } from '../constants/actionTypes'
import { getReadableStories } from '../selectors/story'

describe('story reducer', () => {

    it('adds stories to the story state', () => {
        const stories = ['a', 'b', 'c'];

        const action = {
            type: STORIES_ADD,
            payload: stories,
        }

        const previousState = { stories: [], error: null }
        const expectedNewState = { stories, error: null }

        const newState = storyReducer(previousState, action);
        expect(newState).toEqual(expectedNewState)
    });

    it('retrieves readable stories', () => {
        const storyReducer = {
            error: null,
            stories: [
                { objectID: '1', title: 'foo' },
                { objectID: '2', title: 'bar' },
            ],
        };
        const archiveReducer = ['1'];
        const state = { storyReducer, archiveReducer }

        const expectedReadableStories = [{ objectID: '2', title: 'bar'}];
        const readableStories = getReadableStories(state);

        expect(readableStories).toEqual(expectedReadableStories);
    });
});

describe('story action', () => {
    it('adds stories', () => {
        const stories = ['a', 'b'];

        const expectedAction = {
            type: STORIES_ADD,
            payload: stories,
        }

        const action = doAddStories(stories);
        expect(action).toEqual(expectedAction);
    })
})