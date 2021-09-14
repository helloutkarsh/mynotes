import React from 'react'
import './header.css'
import logo from '../images/logo.png'
export const Header = ({handleToggleDarkMode}) => {
    return (
        <div className="note-header">
            <div className="brand">
            <img className="logo"src={logo} alt="" />
            <h1>Daily Notes</h1>
            </div>
            <button
             className="btn-toggle"
             onClick={()=>handleToggleDarkMode((previousMode)=> !previousMode)}
             >Toggle Dark</button>
        </div>
    )
}
export default Header;