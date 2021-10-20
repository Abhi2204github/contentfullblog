import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Client from "./Client";
import BlogArticle from "./blogarticle";
import {} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Pagination } from "react-bootstrap";
import {SocialMediaIconsReact} from 'social-media-icons-react';
import logo from "./logo.png";
// import Image from 'react-bootstrap/Image';


const AppFunction = () => {
  const [articles, setArticles] = useState();
  // const [loading, setIsLoading] = useState(true);
  // const [error, setIsError] = useState(false);
  const [article, setArticle] = useState(articles && articles.slice(0,1) );


//set the articlesstate to nthe 1st article bz slicing the data.itmes array



  useEffect(() => {
    console.log("fetching data");
    Client.getEntries({
      content_type: 'blogPost'
    }).then((data) => {
      console.log(data.items.slice(0,1))
      setArticles(data.items)
    })
  }, []);
  console.log(articles)


  return (
    <div className="Container">
      <div className="topnav">
        <a href="#top"><img className= "logo" src={logo} alt="logo"/></a>
        <a href="#home" className="active">Home</a>
        <a href="#Blog"className="active">Blog</a>
        <a href="#contact"className="active">Contact</a>
        <a href="#about">About</a>
      </div>
    {/* {article = articles.slice(0,1)}   */}
    {/* article of articles(coming from the fetch) at index 0 */}
    {article && article.map(article => {
      return <BlogArticle key={article.sys.id} blogarticle={article}/> 
    })}
    {/* React-Bootstrap Pagination Component */}
    <Pagination >
        <Pagination.Prev />
        {/* <Pagination.Ellipsis /> */}
        <Pagination.Item onClick = { () => setArticle(articles.slice(1,2))}>{1}</Pagination.Item>
        <Pagination.Item onClick = { () => setArticle(articles.slice(2,3))}>{2}</Pagination.Item>
        <Pagination.Item onClick = { () => setArticle(articles.slice(3,4))}>{3}</Pagination.Item>
        {/* <Pagination.Ellipsis /> */}
        <Pagination.Next />
    </Pagination>


    <div className="footer"> 
      <div className="footer-left">
        <img className="footer-logo" src={logo}/>
          <h5>About HappyHobby </h5>
          <p className="aboutus"><span>We are 2 perspective web developers. Since this webpage is just an exercise,do not consider it as display of our skills.</span></p>
      </div>
      <div className="footer-center">
          <p className="footer-links">
          <a href="#">Home</a>
					<a href="#">Blog</a>
					<a href="#">About</a>
					<a href="#">Contact</a>
          </p>
          <p class= "copywrite"> © 2021 HappyHobby contentful website created by Tomas & Abhilasha </p>
    </div>

    <div class="footer-right">
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="twitter" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="github" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="facebook" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="mail" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
      <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="5" borderStyle="groove" icon="instagram" iconColor="rgba(255,255,255,1)" backgroundColor="rgba(224,179,50,1)" iconSize="3" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" />
		</div>

      </div>
    </div>
  );
};

export default AppFunction;
