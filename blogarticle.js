import React from "react";

const Blogarticle = (props) => {
    console.log(props)
    return(
        <div className ="container">
            <main>
                <h1>This is an article</h1>
            <div className="wrapper">
                <p>{props.blogarticle.fields.heading}</p>
            </div>
            </main>
        </div>
    )
};
export default Blogarticle;