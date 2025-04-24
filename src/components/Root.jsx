import React from 'react'
import { Outlet } from 'react-router-dom'
import Books from './Books/Books'
import ErrorPage from './ErrorPage'
import Footer from './Footer/Footer'
import Home from './Home/Home'

import Navbar from './Navbar/Navbar'

function Root() {
  return (
    <div>
        <Navbar/>
        <Outlet>
            <Home/>
            <ErrorPage/>
            <Books/>
        </Outlet>
        <Footer/>
    </div>
  )
}

export default Root