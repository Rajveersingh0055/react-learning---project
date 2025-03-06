import React from 'react'

function Body(props) {
  return (
    <div>
      <h1 className='body flex justify-center items-center mt-8 text-6xl'>Welcome back , {props.userName} </h1>
    </div>
  )
}

export default Body
