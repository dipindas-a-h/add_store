import React from 'react'
import "./SubHeading.css"

function SubHeading({heading}) {
  return (
    <div className='main col-12 shadow d-flex justify-content-center align-items-center'>
    {heading}
  </div>
  )
}

export default SubHeading