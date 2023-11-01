import { useState } from 'react'
import React from 'react'
import YouTube from "react-youtube";

function Youtube() {
    const [newId, setNewId] = useState(" ")
    const yv = new YoutubeVideo()
    const opts = yv.render()
    return (
        <><> 
            <input
                id="youtubeVideo"
                name="youtubeVideo" 
                className='form-control'
                placeholder="Enter new Video Youtube"
                value={YouTubeGetID(newId)} />
            <input
                id="videoUrl"
                name="videoUrl"
                type="text"
                className='form-control'
                placeholder="Enter new Video Youtube"
                onChange={(e) => setNewId(e.target.value)} />
 
            <YouTube   videoId={YouTubeGetID(newId)}
               />
        </>   </>
    );
}

 

export function YouTubeGetID(url) {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
}

export default Youtube;