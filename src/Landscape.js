import React from "react"
import ReactDOM from "react-dom"
import Photo from './Components/Photo'
import MainPhoto from './Components/MainPhoto'
import CatPhoto from './Components/CatPhoto'
import CatPhotoOld from './Components/CatPhotoOld'
import CatPhotoLarge from './Components/CatPhotoLarge'
import photoData from './photoData.js'

//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/



class Landscape extends React.Component {
  render(){
    const photos = photoData.map(photo=>
        <CatPhoto id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

    const large_photos = photoData.map(photo=>
        <CatPhotoLarge id = {photo.id} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

    return (
      <div>
        <div className="gallery-container">
          {photos}
        </div>

        <div className="cat-large-container">
          {large_photos}
        </div>
      </div>

  )
  }
}

export default Landscape
