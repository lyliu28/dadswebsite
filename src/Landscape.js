import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom"
import CatPhoto from './Components/CatPhoto'
import CatPhotoLarge from './Components/CatPhotoLarge'
import photoData from './photoData.js'

//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/



const Landscape = () => {

    const [width, setWidth]   = useState(window.innerWidth);
    const updateDimensions = () => {
      setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", updateDimensions);
        return () => window.removeEventListener("resize", updateDimensions);
    }, []);

    const photos = photoData.map(photo=>
        <CatPhoto id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

    const large_photos = photoData.map(photo=>
        <CatPhotoLarge id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

    return (
      <div>
      {width > 750 &&
        <div className="gallery-container">
          {photos}
        </div>
      }
        <div className="cat-large-container">
          {large_photos}
        </div>

      </div>

  )
}

export default Landscape
