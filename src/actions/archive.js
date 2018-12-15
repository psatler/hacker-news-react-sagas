import { STORY_ARCHIVE } from '../constants/actionTypes'

const doArchiveStory = id => ({
    type: STORY_ARCHIVE,
    payload: id,
})

export {
    doArchiveStory,
}