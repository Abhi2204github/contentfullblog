import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Client from "./Client";
import BlogArticle from "./blogarticle";

const AppFunction = () => {
  const [articles, setArticles] = useState();
  // const [loading, setIsLoading] = useState(true);
  // const [error, setIsError] = useState(false);

  useEffect(() => {
    console.log("fetching data");
    Client.getEntries().then((data) => {
      console.log(data)
      setArticles(data.items)
    })
  }, []);

  // Verify that the data is in the state
  // Map over the items that you have in the state (it's an array)
  // inside the map, return, for each element, a BlogArticle component and pass the article data as props
  
  return (
    <div className="Container">
      <div className="wrapper">
        <span>Blog post using React and Contentful</span>
      </div>


    {articles && articles.map(article => {
      return <BlogArticle key={article.sys.id} blogarticle={article}/> 
    })}

      {/* <BlogArticle blogarticle={entr.fields.heading}/> */}
    </div>
  );
};

export default AppFunction;
