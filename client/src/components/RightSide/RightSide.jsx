import React from "react";
import TrendCard from "../TrendCard/TrendCard";
import "./RightSide.css";
// import comment from '../../Img/comment.png';

const RightSide = () => {
  return (
    <div className="rightSide">
      <div className="navIcons">
        <i className="fa fa-home" style={{ "font-size": "24px","color":"whitesmoke" }}></i>
        <i className="fa fa-gear" style={{ "font-size": "24px", "color":"whitesmoke" }}></i>
        <i className="fa fa-bell" style={{ "font-size": "24px", "color":"whitesmoke" }}></i>
        <i className="fa fa-comments-o" style={{ "font-size": "24px", "color":"whitesmoke" }}></i>
      </div>

      <TrendCard />
    </div>
  );
};

export default RightSide;
