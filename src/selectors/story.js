const isNotArchived = archiveIds => story =>
    archiveIds.indexOf(story.objectID) === -1

//in plain ES5
// function isNotArchived(archivedIds) {
//     return function (story) {
//         return archivedIds.indexOf(story.objectID) === -1;
//     };
// }

const getReadableStories = ({ storyState, archiveState }) =>
    storyState.filter(isNotArchived(archiveState))

export {
    getReadableStories,
};