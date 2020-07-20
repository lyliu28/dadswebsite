import React from "react"
import Photo from './Components/Photo'
import photoData from './photoData.js'

//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/



class Flight extends React.Component {
    render(){
      const photoComponents = photoData.map(photo=>
          <Photo cat = {photo.category} src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height} category={photo.category}/>)

      return (
        <div className="gallery-container">

      {photoComponents}

          </div>

      )
    }
}

export default Flight
