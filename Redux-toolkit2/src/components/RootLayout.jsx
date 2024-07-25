import React from 'react'
import { Outlet } from 'react-router-dom';
import NavBarPanel from './NavBarPanel';

function RootLayout() {
  return (
    <>
      <NavBarPanel />
      <Outlet />
    </>
  )
}

export default RootLayout