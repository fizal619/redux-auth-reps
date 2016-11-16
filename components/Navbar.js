import React, { Component, PropTypes } from 'react'
import Login from './Login'
import Logout from './Logout'
import { loginUser, logoutUser } from '../actions'

/*
{!isAuthenticated &&
  <Login
    errorMessage={errorMessage}
    onLoginClick={ creds => dispatch(loginUser(creds)) }
  />
}

{isAuthenticated &&
  <Logout onLogoutClick={() => dispatch(logoutUser())} />
}
*/

const Navbar = props => {
    const { dispatch, isAuthenticated, errorMessage } = props;

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">Quotes App</a>
           <div className='navbar-form'>

             <h2>Add Login & Logout Here</h2>

           </div>
       </div>
     </nav>
   );
}

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string
}

export default Navbar;
