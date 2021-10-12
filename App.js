import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { useState, useEffect } from 'react';

const AppFunction = () => {
    const [articles, setArticles] = useState('');
    const [loading, setIsLoading] = useState(true);
    const [error, setIsError] = useState(false);

    const apiKey = process.env.REACT_APP_ACCES_TOKEN
    const contentful = require("contentful");
    const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
        space: "rubkf2az57k1",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
        accessToken: "d2Ctw5UISCFdAMWZhRsOF7vKBfqawE-ghZQ2MLWbktg"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("5PeGS2SoZGSa4GuiQsigQu")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));

    useEffect(() => {
      setIsLoading(true);

      fetch(`https://cdn.contentful.com/spaces/cfexampleapi/entries?access_token=${apiKey}`)
        .then((response)=> {
          if(!response.ok)
            throw new Error(`Oops Something went wrong ${response.status}`);
            return response.json();
        })
        .then((data) => {
          setArticles(data.hits);
          setIsLoading(false);
        })
      .catch((error) =>{
          setIsLoading(false);
          setIsError(true);
          console.log("Request failed", error);
        })  
    }, []);

    
  return (
    <div className="Container">
      <header>
        <div className="wrapper">
          <span>Blog post using React and Contentfull</span>
        </div>
      </header>
      <main>
      <div className="wrapper"></div>
      </main>
    
    </div>
  );
}

export default AppFunction;
