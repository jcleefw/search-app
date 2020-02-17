import React from 'react'
import './header.scss'
import logo from '../../qantas-logo.png'

const Header = () => (
  <header className="header">
    <img className="headerLogo" src={logo} />
  </header>
)

export default Header
