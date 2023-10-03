import React from "react";
import "./ProfileLeft.css";
import Logo from "../profile/LogoSearch/LogoSearch";
import Follow from "../profile/followers/Followers";
import InfoCard from "./InfoCard/InfoCard";

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
      <Logo />
      <InfoCard />
      <Follow />
    </div>
  );
};

export default ProfileLeft;
