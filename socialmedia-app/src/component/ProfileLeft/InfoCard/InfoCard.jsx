import React, { useState } from "react";
import "./InfoCard.css";
import ProfileModal from "../../ProfileModal/ProfileModal";
import UilPen from "@iconscout/react-unicons/icons/uil-pen";
const InfoCard = () => {
  const [ModalOpened, setModalOpened] = useState(false);
  return (
    <div className="ProLeft">
      <div className="Head">
        <h4>Your Info</h4>
        <div>
          <UilPen
            width="2rem"
            height="2rem"
            onClick={() => setModalOpened(true)}
          />
          <ProfileModal
            modalOpened={ModalOpened}
            setModalOpened={setModalOpened}
          />
        </div>
      </div>

      <div className="info">
        <span>
          <b>Status </b>
        </span>
        <span>Single </span>
      </div>
      <div className="info">
        <span>
          <b>Live in </b>
        </span>
        <span>New York </span>
      </div>
      <div className="info">
        <span>
          <b>Work At </b>
        </span>
        <span>Lawyer Form </span>
      </div>
      <button className="button logout-btn">Logout </button>
    </div>
  );
};

export default InfoCard;
