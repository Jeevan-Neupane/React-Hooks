import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      Sorry the Page is Not Found.

      <p>Go to Counter Page <Link to='counter'>Counter</Link> </p>
    </div>
  )
}

export default NotFound
