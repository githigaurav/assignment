import React from 'react'
import SingleTask from './SingleTask'
const TaskContainer = () => {
  return (
    <div className=' border border-white p-2 flex flex-col gap-2 mt-5'>
        <SingleTask text="go to gym"/>
        <SingleTask text="read some books"/>
        <SingleTask text="cook some food"/>
        <SingleTask text="have dinner"/>
    </div>
  )
}

export default TaskContainer