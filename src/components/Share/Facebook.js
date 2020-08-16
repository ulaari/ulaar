import React from 'react'
import FbIcon from '../../assets/icons/facebook.svg'

const Facebook = ({url}) => {
    return (
        <a className="share share-facebook" href={`http://www.facebook.com/sharer/sharer.php?u=${url}`} rel="nofollow noopener noreferrer" target="_blank" title="Share on Facebook">	
            <FbIcon /> <span>Facebook</span>
        </a>
    )
}

export default Facebook