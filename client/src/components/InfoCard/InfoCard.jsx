import React from "react";
import { useState } from "react";
import ProfileModal from "../ProfileModal/ProfileModal";
import "./InfoCard.css";

const InfoCard = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="InfoCard">
      <div className="Infohead">
        <h4>Your Profile</h4>
        <i
          onClick={() => setModalOpened(true)}
          className="fa fa-edit"
          style={{ fontSize: "22px" }}
        ></i>
        <ProfileModal
          modalOpened={modalOpened}
          setModalOpened={setModalOpened}
        />
      </div>

      <div className="info">
        <span>
          <b>Profile </b>
        </span>
        <span>Student</span>
      </div>
      <div className="info">
        <span>
          <b>Lives In </b>
        </span>
        <span>Junagadh</span>
      </div>
      <div className="info">
        <span>
          <b>Mobile No. </b>
        </span>
        <span>+91 1234567890</span>
      </div>
      <button className="button logout-button">Logout</button>
    </div>
  );
};

export default InfoCard;
