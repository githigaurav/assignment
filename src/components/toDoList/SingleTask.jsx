import React from 'react'

const SingleTask = (props) => {
    let task= props.text;
       
    
  return (
    <div className='text-white font-semibold uppercase bg-blue-900 p-3 border'>
       {task}
    </div>
  )
}

export default SingleTask