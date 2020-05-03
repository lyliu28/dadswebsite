import React from 'react'

function Photo(props) {

  return (
    <div className="gallery-photo">
        <img src={props.src}/>
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
    </div>
  )
}

export default Photo
