import React from "react";
import "./profile.css";
import Logo from "./LogoSearch/LogoSearch";
import ProfileCard from "./profileCard/profileCard";
import Followers from "./followers/Followers";
const profile = () => {
  return (
    <div className="profile">
      <Logo />
      <ProfileCard />
      <Followers />
    </div>
  );
};

export default profile;
