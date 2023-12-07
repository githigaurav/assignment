import React from 'react'
function Navbar() {
  return (
    <div className='bg-blue-300  w-full flex justify-center  text-blue-900 '>
        <div className='flex gap-4 '>
          <button className='p-2'>Home</button>
          <button className='p-2'>Tourism</button>
          <button className='p-2'>Kpop</button>
          <button className='p-2'>Technology</button>
          <button className='p-2'>Movie</button>
          <button className='p-2'>Food</button>
        </div>
    </div>
    
  )
}

export default Navbar