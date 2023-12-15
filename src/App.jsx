import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import ToDoList from './components/toDoList/ToDoList'
function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<ToDoList/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App