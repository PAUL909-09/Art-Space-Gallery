import React from 'react'
import NavigationBar from '../components/navigationBar'
import { Outlet } from 'react-router-dom'

const userLayout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />

    </div>
  )
}

export default userLayout