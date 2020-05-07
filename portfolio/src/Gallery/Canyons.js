import photoData from "../photoData"
import React from "react"
import Photo from './Photo'
import canyonData from './canyonData'

//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/

class Canyons extends React.Component {
    render(){
      const photoComponents = canyonData.map(photo=>
          <Photo src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      return (
        <div>

      <h5> Canyons</h5>

      <div className="category-container">

      {photoComponents}
      </div>
      </div>

    )
    }
}

export default Canyons
