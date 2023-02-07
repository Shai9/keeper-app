import React from 'react'

function Note(props) {
  return (
    <div className='p-5'>
      <div className='bg-white p-8 rounded-2xl shadow-lg  md:w-1/2 '>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Note