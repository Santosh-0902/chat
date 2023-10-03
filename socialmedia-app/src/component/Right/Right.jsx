import React, { useState } from "react";
import "./Right.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import TrendCard from "./TrendCard/TrendCard";
import UilSetting from "@iconscout/react-unicons/icons/uil-setting";
import ShareModal from "../Sharemodal/ShareModel";
const Right = () => {
  const [ModalOpened, setModalOpened] = useState(false);
  return (
    <div className="Right">
      <div className="NavIcon">
        <img src={Home} alt="" />
        <UilSetting />
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
      </div>
      <TrendCard />
      <button className="button r-btn" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={ModalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default Right;
