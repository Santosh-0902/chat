import React from "react";
import "./Profile.css";
import ProfileLeft from "../../component/ProfileLeft/ProfileLeft";
import ProfileMid from "../../component/ProfileMid/ProfileMid";
import ProfileRight from "../../component/ProfileRight/ProfileRight";
const Profile = () => {
  return (
    <div className="Profil">
      <div className="fixed">
        <ProfileLeft />
      </div>
      <ProfileMid />
      <div className="fixed">
        <ProfileRight />
      </div>
    </div>
  );
};

export default Profile;
