import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

function NavBar() {
  return (
    <div className='header' >
        <nav>
            <NavLink to='counter'>Counter</NavLink>
            <NavLink to='previoustate'>Previous State</NavLink>
            <NavLink to='stateObject'>Use State With Object</NavLink>
            <NavLink to='stateArray'>Use State With Array</NavLink>



        </nav>
        <main>
            <Outlet/>

        </main>
    </div>
  )
}

export default NavBar
