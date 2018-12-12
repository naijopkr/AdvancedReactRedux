import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './Header.css'

const header = props => {
  const links = props.auth
  ? (
    <>
      <Link to='/signout'>Sign Out</Link>
      <Link to='/feature'>Feature</Link>
    </>
  ) : (
    <>
      <Link to='/signup'>Sign Up</Link>
      <Link to='/signin'>Sign In</Link>
    </>
  )

  return (
    <div className='header'>
      <Link to='/'>Redux Auth</Link>
      {links}
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth.authenticated
})

export default connect(mapStateToProps)(header)