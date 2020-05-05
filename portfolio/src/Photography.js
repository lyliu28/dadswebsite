import React from "react"
import ReactDOM from "react-dom"
import Gallery from 'react-photo-gallery'
import NavBar from './NavBar'
import Photo from './Gallery/Photo'
import photoData from "./photoData"

//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/



class Photography extends React.Component {
    render(){
      const photoComponents = photoData.map(photo=>
          <Photo src={photo.url} title={photo.title} desc={photo.desc}/>)

      return (
        <div>
          <div className="row">
          <h1> Photography</h1>
          {photoComponents}
          </div>
        </div>
      )
    }
}

export default Photography
