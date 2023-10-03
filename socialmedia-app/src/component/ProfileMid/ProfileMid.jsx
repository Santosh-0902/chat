import React from "react";
import "./ProfileMid.css";
import ProfileCard from "../profile/profileCard/profileCard";
import Posts from "../post/Posts/Posts";
import PostShare from "../post/PostShare/PostShare";
const ProfileMid = () => {
  return (
    <div className="ProMid">
      <ProfileCard />
      <PostShare />
      <Posts />
    </div>
  );
};

export default ProfileMid;
