import React from 'react'
import  "./Loading.css"

function Loading({progress}) {
  const yellow = "#DAA520";
  const orange = "#D23F00";
  const blue = "#0033FF";

  return (
    <div className="star-wars-loader">
      <div className="star-wars-loader-inner"></div>
      <div className="star-wars-loader-outer"></div>
    </div>
  )
}

export default Loading