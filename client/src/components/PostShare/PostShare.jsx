import React, { useState, useRef } from "react";
import "./PostShare.css";
import Img6 from "../../Img/Image-6.jpg";
// import img from '../../Img/img.jpg';
// import {VideoLibraryIcon} from '@mui/icons-material/VideoLibrary';

const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <>
      <div className="Postshare">
        <img src={Img6} alt="" />
        <div>
          <input
            type="text"
            placeholder="What's new in this time?"
            className="search"
          />
          <div className="postOptions">
            <div
              className="option"
              style={{ color: "#0d0d4c" }}
              onClick={() => imageRef.current.click()}
            >
            <i className="fa fa-image"></i>
              Photo
            </div>
            <div className="option" style={{ color: "blue" }}>
            <i className="fa fa-video-camera"></i>
              Video
            </div>
            <div className="option" style={{ color: "darkblue" }}>
            <i className="fa fa-map-marker"></i>
              Location
            </div>
            <div className="option" style={{ color: "darkcyan" }}>
            <i className="fa fa-calendar"></i>
              Schedule
            </div>
            <button className="button ps-button">Share</button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="previewImage">
              <i class="fa fa-times" aria-hidden="true" onClick={() => setImage(null)}></i>
              <img src={image.image} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
