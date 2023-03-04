import React from "react";
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardText
} from 'reactstrap';
const Content = (props) => {
    const { content } = props;
    return (

        // <div className="content">
        //     <h1>{content.title}</h1>
        //     <h2>Taken by {content.copyright}</h2>
        //     <img src={content.url} alt={content.title} />
        //     <p>{content.explanation}</p>
        // </div>
        
        <div>
            <Card inverse>
                <CardImg
                    alt={content.title}
                    src={content.url}
                    style={{
                        height: 1200
                    }}
                    width="100%"
                />
                <CardImgOverlay>
                    <CardTitle tag="h5">
                    {content.title}
                    </CardTitle>
                    <CardText>
                    {content.explanation}
                    </CardText>
                    <CardText>
                        <small className="text-muted">
                        Taken by {content.copyright}
                        </small>
                    </CardText>
                </CardImgOverlay>
            </Card>
        </div>

    )
}
export default Content;