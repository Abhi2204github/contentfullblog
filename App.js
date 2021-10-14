import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Client from "./Client";
import BlogArticle from "./blogarticle";
import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const AppFunction = () => {
  const [articles, setArticles] = useState();
  // const [loading, setIsLoading] = useState(true);
  // const [error, setIsError] = useState(false);

  useEffect(() => {
    console.log("fetching data");
    Client.getEntries({
      content_type: 'blogPost'
    }).then((data) => {
      console.log(data)
      setArticles(data.items)
    })

    // Client.getEntries({
    //   content_type: '<content_type_id>',
    //   'fields.<content>[all]': 'flowers,accessories'
    // })

  }, []);
  
  return (
    <div className="Container">
      <div className="wrapper">
        <span>Blog post using React and Contentful</span>
      </div>
    {articles && articles.map(article => {
      return <BlogArticle key={article.sys.id} blogarticle={article}/> 
    })}

    </div>
  );
};

export default AppFunction;
