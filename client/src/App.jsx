import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import SignUp from './pages/public/SignUp'
import SignIn from './pages/public/SignIn'
import NotFound from './pages/public/NotFound'
import Exapmle from './pages/public/Exapmle'

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp />}/>
        <Route  path='/signin' element={<SignIn />}/>
        <Route path='/*' element = {<NotFound />} />
        <Route path='/example' element = {<Exapmle />} />
      </Routes>
    </Router>
    </>
  )
}

export default App