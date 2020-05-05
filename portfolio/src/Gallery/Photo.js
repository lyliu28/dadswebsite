import React from 'react'

function Photo(props) {

  return (
    <div className="column">
    <div className="gallery-photo">

        <img style= {{width: props.width, height: "auto"}} src={props.src}/>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
        </div>
    </div>
  )
}

export default Photo
