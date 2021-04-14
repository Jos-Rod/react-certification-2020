import React, { useContext } from 'react';
import './NavBar.styles.css';
import { FaUserAlt, FaRegMoon } from 'react-icons/fa'; // FaHamburger, FaMoon
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import SearchBar from '../SearchBar';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import styled from 'styled-components';

const NavBar = (props) =>  {

  const { currentTheme, updateCurrentTheme } = useContext(ThemeContext);

  function changeColorMode() {
    updateCurrentTheme(themes.dark);
  }

  const NavBarStyled = styled.div`
      {
        position: absolute;
        top: 0;
        margin-bottom: 10px;
        width: 100%;
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 6px 6px 0 rgba(0, 0, 0 , .1);
        background-color: ${currentTheme.backgroundPrincipalColor};
      }
  `;
  const ButtonHome = styled.button`
    {
      background-color: white;
      color: ${currentTheme.backgroundPrincipalColor};
      border-style: none;
      padding: 10px;
      font-weight: 800;
      letter-spacing: 2px;
      border-radius: 10px 15px 10px 15px;
      transition-duration: 0.4s;
      margin-left: 30px;
      font-size: large;
      outline: none;
    };

  &:hover {
      margin-left: 30px;
      font-size: large;
      background-color: transparent;
      color: white;
      border-style: none;
      padding: 10px;
      font-weight: 800;
      letter-spacing: 2.8px;
      border-radius: 10px 15px 10px 15px;
      cursor: pointer;
      outline: none;
    }
  `;
  const ButtonHoverItem = styled.button`
    {
      display: 'inline';
      background-color: transparent;
      border: 0;
      outline: none;
      transition-duration: 0.4s;
      border-radius: 30px;
    }
    &:hover {
      display: 'inline';
      background-color: ${currentTheme.backgroundPrincipalColor};
      border: 0;
      outline: none;
      border-radius: 30px;
      box-shadow: 0 20px 15px 0 rgba(0, 0, 0 , .1);
    }
  `;

   return  (
      <IconContext.Provider
        value={{ style: { fontSize: '36px', color: 'rgb(255, 255, 224)' } }}
      >
        <NavBarStyled>
          <div style={{ marginLeft: '30px', display: 'flex', alignItems: 'center' }}>
            <GiHamburgerMenu />
            <ButtonHome onClick={props.homeAction} >YouZline</ButtonHome>
          </div>
          <SearchBar searchValue={props.handleValSearch} />
          <div className="rightActions" style={{ display: 'flex', alignItems: 'center' }}>
            {/* Button for changing color mode */}
            <ButtonHoverItem className="buttonUser" onClick={changeColorMode}>
              <FaRegMoon />
            </ButtonHoverItem>
            <p style={{ display: 'inline', marginLeft: 13, marginRight: 13 }}>Dark mode</p>
            <ButtonHoverItem className="buttonUser">
              <FaUserAlt />
            </ButtonHoverItem>
          </div>
        </NavBarStyled>
      </IconContext.Provider>
  );

  };

export default NavBar;
