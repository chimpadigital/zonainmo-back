
import React from "react";
import UploadPhotoGallery from "./UploadPhotoGallery";
import { useState } from 'react'
import YouTube from "react-youtube";

export default function UploadMedia() {
  const [newId, setNewId] = useState("")
  const yv = new YoutubeVideo()
  const opts = yv.render()
  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Upload photos of your property</h4>
      <div className="row">
        <div className="col-lg-12">
          <UploadPhotoGallery />
        </div>
      </div>
      {/* End col-12 */}

      <div className="row">
        <input
          id="youtubeVideo"
          name="youtubeVideo"
          className='form-control'
          defaultValue={YouTubeGetID(newId)} />
        <input
          id="videoUrl"
          name="videoUrl"  
          value={newId}
          onChange={(e) => setNewId(e.target.value)} />
      </div>
      <YouTube videoId={YouTubeGetID(newId)}
        opts={opts} />
    </div>
  );
};



export class YoutubeVideo extends React.Component {
  render() {
    const opts = {
      height: "790",
      width: "100",
      playerVars: {
        autoplay: 1,
      },
    };
    return opts
  }

}

export function YouTubeGetID(url) {
  url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

