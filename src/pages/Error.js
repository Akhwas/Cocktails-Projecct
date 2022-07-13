import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Error = () => {
  return (
    <div>
      <h2>oppss! it's a dead page</h2>
      <Link className='btn btn-primary' to='/' element={<Home/>}>
        
      Back to home </Link>
    </div>
  )
}

export default Error
