import React from "react";
import "./PostSide.css";
import Postshare from "./PostShare/PostShare";
import Posts from "./Posts/Posts";
const post = () => {
  return (
    <div className="post">
      <Postshare />
      <Posts />
    </div>
  );
};

export default post;
