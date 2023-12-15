import React from 'react'

const InputContainer = () => {
  return (
    <div className='p-2 flex justify-center' >
        <input className='p-2' placeholder='Enter your task'/>
        <button className='p-2 bg-blue-800 text-white' >Add</button>
    </div>
  )
}

export default InputContainer