import React from 'react'
import TwitterIcon from '../../assets/icons/twitter.svg'


const Twitter = ({url, title, username}) => {
    return (
        <a className="share share-twitter" href={`https://twitter.com/intent/tweet?text=${title}&url=${url}&via=${username}&related=${username}`} rel="nofollow noopener noreferrer" target="_blank" title="Share on Twitter">	
            <TwitterIcon /> <span>Twitter</span>
        </a>        
    )
}

export default Twitter