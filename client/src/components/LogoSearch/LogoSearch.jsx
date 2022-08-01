import React from "react";
import "./LogoSearch.css";
// import {UilSearch} from '@iconscout/react-unicons';

const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      {/* <img src={Logo} alt=''/> */}
      <div className="Search">
        <input type="text" placeholder="#Explore" />
        {/* <div className='s-icon'>
                <UilSearch />
            </div> */}
        <div className="s-icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
