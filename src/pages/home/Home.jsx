import React from "react";
import PostSide from "../../components/PostSide/PostSide";
import ProfileSide from "../../components/ProfileSide/ProfileSide";
import RightSide from "../../components/RightSide/RightSide";

import "./Home.css";
// import Logo from "../../Img/favicon.png";

const home = () => {
  return (
    <>
      <div className="Home">
        <ProfileSide />
        <PostSide />
        <RightSide />
      </div>
    </>
  );
};

export default home;
