import React from "react"
import aData from './PhotoData/aData'
import ImageModal from './ImageModal'
import CatPhoto from "./CatPhoto"
import CatPhotoLarge from "./CatPhotoLarge"


//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/

class A extends React.Component {
    render(){
      const photos = aData.map(photo=>
          <CatPhoto src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      const large_photos = aData.map(photo=>
            <CatPhotoLarge src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      return (
        <div>

      <h5>A</h5>

      <div className="category-container">
      {photos}
      </div>

      <div className="cat-large-container">
      {large_photos}
      </div>
      </div>

    )
    }
}

export default A
