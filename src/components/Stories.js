import React from 'react'
import './Stories.css'
import { connect } from 'react-redux'
import { getReadableStories } from '../selectors/story'

import Story from './Story'

const COLUMNS = {
    title: {
      label: 'Title',
      width: '40%',
    },
    author: {
      label: 'Author',
      width: '30%',
    },
    comments: {
      label: 'Comments',
      width: '10%',
    },
    points: {
      label: 'Points',
      width: '10%',
    },
    archive: {
      width: '10%',
    },
};

// creating a component for header
const StoriesHeader = ({ columns }) => (
    <div className="stories-header">
        {Object.keys(COLUMNS).map(key => 
            <span
                key={key}
                style={{width: COLUMNS[key].width }}
            >
                {COLUMNS[key].label}
            </span>
        )}
    </div>
)
    
// stories is mapped from state and onArchive from dispatch
const Stories = ({ stories }) =>
    <div className="stories">
        <StoriesHeader columns={COLUMNS} />

        {(stories || []).map(story => 
            <Story 
                key={story.objectID} 
                story={story}  
                columns={COLUMNS}
            />
        )}
    </div>


const mapStateToProps = state => ({
    stories: getReadableStories(state), // using a selector to derive from state
});



export default connect(mapStateToProps)(Stories);
