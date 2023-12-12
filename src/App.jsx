// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
import Navbar from './components/Navbar'
// import Main from './components/Main'
// import Footer from './components/Footer'
// function App() {
//     return (
//         <>
//             <div className='flex  flex-col h-screen '>
//                 <div>
//                     <Header />
//                     <Navbar />
//                 </div>
//                 <div className='flex-1'>
//                     <Router>
//                         <Routes>
//                             <Route path='/' element={<Main />} />
//                         </Routes>
//                     </Router>
//                 </div>
//                 <div className='flex-1'>
//                     <Footer />
//                 </div>
//             </div>
//         </>
//     )
// }

// export default App


import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path='/' element={<Navbar/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default App