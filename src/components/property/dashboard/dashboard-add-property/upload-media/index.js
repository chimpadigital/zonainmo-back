import React from "react";
import UploadPhotoGallery from "./UploadPhotoGallery";
import VideoOptionFiled from "./VideoOptionFiled";
import YoutubeVideo from "./YoutubeVideo";

const UploadMedia = () => {
  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Upload photos of your property</h4>
      <form className="form-style1">
        <div className="row">
          <div className="col-lg-12">
            <UploadPhotoGallery />
          </div>
        </div> 

        <div className="row">
          <h4 className="title fz17 mb30">Video Option</h4>
          <YoutubeVideo />
        </div>  
      </form>
    </div>
  );
};

export default UploadMedia;
