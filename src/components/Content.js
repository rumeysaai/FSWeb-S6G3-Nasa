import React from "react";

const Content = (props)=> {
const {content}=props;
    return(

        <div className="content">
            <h1>{content.title}</h1>
            <h2>Taken by {content.copyright}</h2>
            <img src={content.url} alt={content.title} />
            <p>{content.explanation}</p>
        </div>
    )
}
export default Content;