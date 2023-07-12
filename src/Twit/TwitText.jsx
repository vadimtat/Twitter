import React from 'react'

const TweetText = ({text, url, alt}) => {
    return (
        <div>
            <p>{text}</p>
            <img src={url} alt={alt}/>
        </div>
    );
}
export default TweetText;