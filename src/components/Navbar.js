import React from 'react';
import PropTypes from "prop-types";

export default function Navbar1(props)
{
  const handleEnable = ()=>
  {
    props.showAlert('Hello','hi')
  }
    return(
        <>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.logoTitle}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.aboutUs}</a>
        </li>
      </ul>
      <div className= "form-check form-switch" >
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label onClick={handleEnable} className={`form-check-label" text-${props.mode==='dark'?'light':'dark'} htmlFor="flexSwitchCheckDefault`}>Enable DarkMode</label>
</div>
    </div>
  </div>
</nav>

</>
    )
}
Navbar1.propTypes = {
    logoTitle : PropTypes.string.isRequired,
    aboutUs : PropTypes.string
}
//We set tyeps of props so that in future if I try to pass the  datatypes which are not supposed to be sent, then It will help me to identfy the error.

Navbar1.defaultProps ={
    logoTitle:"Please set the logo title",
    aboutUs:"Please set the about Us"
}
//This is used when I don't set the props value in app.js file ,then this, the default value will be set,