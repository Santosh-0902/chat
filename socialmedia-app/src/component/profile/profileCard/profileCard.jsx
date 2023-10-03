import React from "react";
import "./profileCard.css";
import Profile from "../../../img/profileImg.jpg";
import Cover from "../../../img/cover.jpg";
const profileCard = () => {
  const profilePage = true;
  return (
    <div className="profilecard">
      <div className="profileimg">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="profileName">
        <span>Harvey Spector</span>
        <span>Senior Lawyer</span>
      </div>
      <div className="followstatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,890</span>
            <span>Followers</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Following</span>
          </div>
          {profilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default profileCard;
