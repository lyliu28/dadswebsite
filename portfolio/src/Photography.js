import React from "react"
import ReactDOM from "react-dom"
import Gallery from 'react-photo-gallery'
import NavBar from './NavBar'
import Photo from './Gallery/Photo'

//https://reactjsexample.com/responsive-react-masonry-photo-gallery-component/


function Photography(){


  return (

    <div>
    <h1> Photography</h1>
      <Photo
          className= "photo"
          src= "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&w=1000&q=80"
          title="Land's End"
          description="hey"
      />
    
    </div>
  )
}

export default Photography
