import React, { useContext } from 'react';
import { FaUserAlt, FaRegMoon, FaSun, FaUserAltSlash } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import SearchBar from '../SearchBar';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import { ButtonHome, NavBarStyled, ButtonHoverItem, NotDisplayWhenSmall } from './NavBar-styling';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import ModalLogin from '../ModalLogin/ModalLogin.component';
import { useAuth } from '../../providers/Auth/Auth.provider';

const NavBar = (props) =>  {

  const { currentTheme, updateCurrentTheme } = useContext(ThemeContext);
  const { showingModalLogin, showOrHideModalLogin } = useSiteInfo();
  const { authenticated } = useAuth();

  function changeColorMode() {
    updateCurrentTheme(currentTheme === themes.dark ? themes.light : themes.dark);
  }

  function handleClickLoginButton() {
    showOrHideModalLogin();
  }

  function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
  }

   return  (
      <IconContext.Provider
        value={{ style: { fontSize: '36px', color: 'rgb(255, 255, 224)' } }}
      >
        { showingModalLogin ? 
        <ModalLogin theme={currentTheme}>
        </ModalLogin> : null}
        {/* <ModalLogin theme={currentTheme}>
        </ModalLogin> */}
        <NavBarStyled theme={currentTheme}>
          <div style={{ marginLeft: '30px', display: 'flex', alignItems: 'center' }}>
            <ButtonHoverItem onClick={openNav}> 
              <GiHamburgerMenu />
            </ButtonHoverItem>
            <NotDisplayWhenSmall>
              <ButtonHome style={{ marginLeft:"30px" }} theme={currentTheme} onClick={props.homeAction} >YouZline</ButtonHome>
            </NotDisplayWhenSmall>
          </div>
          <SearchBar />
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            {/* Button for changing color mode */}
            <ButtonHoverItem theme={currentTheme} id="buttonDarkMode" onClick={changeColorMode}>
              {currentTheme === themes.light ? <FaRegMoon className="ASDF" /> : <FaSun/> }
            </ButtonHoverItem>
            <ButtonHoverItem theme={currentTheme} className="buttonUser" onClick={handleClickLoginButton}>
              { !authenticated ? <FaUserAltSlash/> : <FaUserAlt /> }
            </ButtonHoverItem>
          </div>
        </NavBarStyled>
      </IconContext.Provider>
  );

  };

export default NavBar;
