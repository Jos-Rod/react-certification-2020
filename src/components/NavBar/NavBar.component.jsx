import React from 'react';
import './NavBar.styles.css';
import { FaUserAlt, FaRegMoon } from 'react-icons/fa'; // FaHamburger, FaMoon
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import SearchBar from '../SearchBar';


const NavBar = (props) => (
  <IconContext.Provider
    value={{ style: { fontSize: '36px', color: 'rgb(255, 255, 224)' } }}
  >
    <div className="navBar">
      <div style={{ marginLeft: '30px', display: 'flex', alignItems: 'center' }}>
        <GiHamburgerMenu />
      </div>
      <div>
        <span />
      </div>
      <SearchBar itemsFromSearch={props.handleValSearch} />
      <div className="rightActions" style={{ display: 'flex', alignItems: 'center' }}>
        <button className="buttonUser">
          <FaRegMoon />
        </button>
        <p style={{ display: 'inline', marginLeft: 13, marginRight: 13 }}>Dark mode</p>
        <button className="buttonUser">
          <FaUserAlt />
        </button>
      </div>
    </div>
  </IconContext.Provider>
);

export default NavBar;
