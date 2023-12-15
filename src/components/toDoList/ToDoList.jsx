import React from 'react'
import InputContainer from './InputContainer'
import TaskContainer from './TaskContainer'
const ToDoList = () => {
  return (
    <div className=' max-w-[600px] w-full bg-blue-600 p-3 rounded-xl m-auto mt-5'>
    <InputContainer/>
    <TaskContainer/>
    </div>
  )
}

export default ToDoList