import React, { Component, PropTypes } from 'react'

// Use className="btn btn-primary" to style it
const Logout = props => (
  <div>Make a logout button</div>
);

Logout.propTypes = {
  onLogoutClick: PropTypes.func.isRequired
}

export default Logout;
