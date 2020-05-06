import React from 'react'

function Photo(props) {

  return (
    <div className="column">
        <img src={props.src}/>
        {//<h3>{props.title}</h3>
        //<p>{props.desc}</p>}
      }
    </div>
  )
}

export default Photo
