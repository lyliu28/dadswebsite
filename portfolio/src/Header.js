import React from "react"
import ReactDOM from "react-dom"


function Header(){
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }

  return (
    <div className = "Header">
    <h1>Good {timeOfDay}!</h1>
    </div>
  )
}

export default Header;
