import React from "react";
import "./Home.css";
import Profile from "../../component/profile/profile";
import Post from "../../component/post/PostSide";
import RightSide from "../../component/Right/Right";
const Home = () => {
  return (
    <div className="Home">
      <Profile />
      <Post />
      <RightSide />
    </div>
  );
};

export default Home;
