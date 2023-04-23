import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      Page Not Found 
      Go To Home Page <Link to='/'>Home</Link>
    </div>
  )
}

export default NotFound
