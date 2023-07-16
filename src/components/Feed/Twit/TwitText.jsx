import React from 'react'

const TwitText = ({text, url, alt}) => {
    return (
        <div>
            <p>{text}</p>
            <img src={url} alt={alt}/>
        </div>
    );
}
export default TwitText;