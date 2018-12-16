const isNotArchived = archiveIds => story =>
    archiveIds.indexOf(story.objectID) === -1

//in plain ES5
// function isNotArchived(archivedIds) {
//     return function (story) {
//         return archivedIds.indexOf(story.objectID) === -1;
//     };
// }

const getReadableStories = ({ storyReducer, archiveReducer }) =>
    storyReducer.stories.filter(isNotArchived(archiveReducer));

const getFetchError = ({ storyReducer }) =>
    storyReducer.error;

export {
    getReadableStories,
    getFetchError
};