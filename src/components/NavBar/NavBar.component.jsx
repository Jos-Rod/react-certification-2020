import React, { useContext } from 'react';
import { FaUserAlt, FaRegMoon, FaSun } from 'react-icons/fa'; // FaHamburger, FaMoon
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import SearchBar from '../SearchBar';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import { ButtonHome, NavBarStyled, ButtonHoverItem } from './NavBar-styling';

const NavBar = (props) =>  {

  const { currentTheme, updateCurrentTheme } = useContext(ThemeContext);

  function changeColorMode() {
    updateCurrentTheme(currentTheme == themes.dark ? themes.light : themes.dark);
  }

   return  (
      <IconContext.Provider
        value={{ style: { fontSize: '36px', color: 'rgb(255, 255, 224)' } }}
      >
        <NavBarStyled theme={currentTheme}>
          <div style={{ marginLeft: '30px', display: 'flex', alignItems: 'center' }}>
            <GiHamburgerMenu />
            <ButtonHome theme={currentTheme} onClick={props.homeAction} >YouZline</ButtonHome>
          </div>
          <SearchBar searchValue={props.handleValSearch} />
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            {/* Button for changing color mode */}
            <ButtonHoverItem theme={currentTheme} className="buttonUser" onClick={changeColorMode}>
              {currentTheme == themes.light ? <FaRegMoon /> : <FaSun/> }
            </ButtonHoverItem>
            <ButtonHoverItem theme={currentTheme} className="buttonUser">
              <FaUserAlt />
            </ButtonHoverItem>
          </div>
        </NavBarStyled>
      </IconContext.Provider>
  );

  };

export default NavBar;
