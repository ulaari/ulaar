import React from 'react'
import LinkedinIcon from '../../assets/icons/linkedin.svg'

const Linkedin = ({url, title, username}) => {
    return (
        <a className="share share-linkedin" href={`https://www.linkedin.com/shareArticle?url=${url}&mini=true&title=${title}&source=${username}`} rel="nofollow noopener noreferrer" target="_blank" title="Share on Linkedin">	
            <LinkedinIcon /><span>Linkedin</span>
        </a>        
    )
}

export default Linkedin