import React from "react"
import ReactDOM from "react-dom"
import NavBar from './NavBar'
import Photo from './Gallery/Photo'
import photoData from "./photoData"
import Masonry from "react-masonry-css"
import Gallery from 'react-photo-gallery'

//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/



class Photography extends React.Component {
    render(){
      const photoComponents = photoData.map(photo=>
          <Photo src={photo.src} title={photo.title} desc={photo.desc} width={photo.width} height={photo.height}/>)

      return (
        <div className="gallery-container">
        {/*}<div>
          <h1> Photography</h1>
          <Masonry
          breakpointCols={3}
          className="my_masonry_grid"

          columnClassName="my-masonry-grid_column">
          */}
      {photoComponents}
      {/*
          </Masonry>


          </div>
          */}

          </div>

      )
    }
}

export default Photography
