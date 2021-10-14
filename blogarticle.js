import React from "react";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Blogarticle = (props) => {
    // console.log(typeof documentToReactComponents)

    // const content =
    return(
        <div className ="container">
            <header>
                <div className="post">
                    <h1>{props.blogarticle.fields.heading}</h1>
                    {<img className= "image"  src={props.blogarticle.fields.image.fields.file.url}/>}
                    {documentToReactComponents(props.blogarticle.fields.description)}
                </div>
            </header>
        </div>
    )
};


export default Blogarticle;