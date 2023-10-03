import React from "react";
import "./Follower.css";
import { Follower } from "../../../Data/FollowerData";
const Followers = () => {
  return (
    <div className="FollowerCard">
      <h3>Who Is Follow You</h3>
      {Follower.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className="img" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <div>
              <button className="fc-button">follow</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Followers;
