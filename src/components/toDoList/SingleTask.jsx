import React from 'react'

const SingleTask = (props) => {
    let task= props.text;
       
    
  return (
    <div className='text-white font-semibold uppercase bg-blue-900 p-3 border flex justify-between '>
       <h1>{task}</h1>
       <div className='flex gap-5'>
       <button className='bg-blue-600 px-3 font-thin'>Edit</button>
       <button className='bg-blue-600 px-3 font-thin'>Delete</button>
       </div>
    </div>
  )
}

export default SingleTask