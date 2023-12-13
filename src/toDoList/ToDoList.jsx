import React from 'react'
import linux from './../toDoList/linux.png'
function ToDoList() {
  return (
    <>
        <div className='flex '>
            <img src={linux} alt="linux" style={{backgroundColor:'orange', padding:"1rem"}} />
            <img src="https://pngimg.com/d/mario_PNG53.png" alt="mario" style={{width:"20rem"}}/>
        </div>
    </>
  )
}

export default ToDoList