import React from 'react';
import person from './Person.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper header__wrapper">
        <a className="logo" />
        <nav className='header__navigation'>
          <ul className='header__list'>
            <li className='navigation__link'><a href='#' className='nav-link'>About Us</a> </li>
            <li className='navigation__link'><a href='#' className='nav-link'>Courses </a> </li>
            <li className='navigation__link'> <a href='#' className='nav-link open'>Events</a> </li>
            <li className='navigation__link'> <a href='#' className='nav-link'>Blog </a> </li>
            <li className='navigation__link'><a href='#' className='nav-link'> Contacts </a></li>
          </ul>
        </nav>
        <button className='header__button'>Get consultation</button>
        <div className="login">
          <img src={person} alt="Log In" className='login-img' />
          <a href='#'>Log in&nbsp;</a>
          <span className='slash'>/</span>
          <a href='#'>&nbsp;Register</a>
        </div>
      </div>
    </header>
  );
};

export default Header;