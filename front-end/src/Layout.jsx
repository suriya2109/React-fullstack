import React from 'react'
import NavBarComponent from './components/NavBarComponent'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
   <> 
    <NavBarComponent/>
    <Outlet />
   </>
  )
}

export default Layout