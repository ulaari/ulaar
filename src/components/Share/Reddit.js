import React from 'react'
import RedditIcon from '../../assets/icons/reddit.svg'


const Reddit = ({url, title}) => {
    return (
        <a className="share share-reddit" href={`https://reddit.com/submit?url=${url}&title=${title}`} rel="nofollow noopener noreferrer" target="_blank" title="Share on Reddit">	
            <RedditIcon /><span>Reddit</span>
        </a>
    )
}

export default Reddit