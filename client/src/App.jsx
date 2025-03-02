import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Login from './pages/public/Login'
import Register from './pages/public/Register'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/register' element ={<Register />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App