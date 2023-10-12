import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import SignUp from './pages/SignUp'
import About from './pages/about'
import Profile from './pages/Profile'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={< Home />}/>
      <Route path='/sign-in' element ={< SignIn />}/>
      <Route path='/sign-up' element ={< SignUp />}/>
      <Route path='/profile' element ={< Profile />}/>
      <Route path='/about' element ={< About />}/>
    </Routes>
    </BrowserRouter>
  )
}
