import React from "react"
import ReactDOM from "react-dom"
import Photo from './Components/Photo'
import MainPhoto from './Components/MainPhoto'
import photoData from './photoData.js'

//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/



class Photography extends React.Component {
    render(){
      const photoComponents = photoData.map(photo=>
          <MainPhoto cat = {photo.category} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height} category={photo.category}/>)

      return (
        <div className="gallery-container">

      {photoComponents}

          </div>

      )
    }
}

export default Photography
