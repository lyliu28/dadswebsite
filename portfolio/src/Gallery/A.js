import photoData from "../photoData"
import React from "react"
import Photo from './Photo'
import canyonData from './canyonData'
import ImageModal from './ImageModal'

//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/

class A extends React.Component {
    render(){
      const imageComponents = canyonData.map(photo=>
          <ImageModal src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      return (
        <div>

      <h5> A</h5>

      <div className="category-container">

      {imageComponents}
      </div>
      </div>

    )
    }
}

export default A
