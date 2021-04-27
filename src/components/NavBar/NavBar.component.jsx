import React, { useContext } from 'react';
import { FaUserAlt, FaRegMoon, FaSun, FaUserAltSlash } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import SearchBar from '../SearchBar';
import ThemeContext, { themes } from '../../providers/Theme/Theme.provider';
import { ButtonHome, NavBarStyled, ButtonHoverItem, NotDisplayWhenSmall } from './NavBar-styling';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import ModalLogin from '../ModalLogin/ModalLogin.component';
import { useAuth } from '../../providers/Auth/Auth.provider';
import { Link } from 'react-router-dom';

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
     <>
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
              <Link to="/" onClick={props.homeAction}><ButtonHome style={{ marginLeft:"30px" }} theme={currentTheme} >YouZline</ButtonHome></Link>
            </NotDisplayWhenSmall>
          </div>
          <SearchBar />
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            {/* Button for changing color mode */}
            <ButtonHoverItem style={{ marginRight: '10px', }} theme={currentTheme} id="buttonDarkMode" onClick={changeColorMode}>
              {currentTheme === themes.light ? <FaRegMoon className="ASDF" /> : <FaSun/> }
            </ButtonHoverItem>
            <ButtonHoverItem style={{ marginRight: '10px', }} theme={currentTheme} className="buttonUser" onClick={handleClickLoginButton}>
              { !authenticated ? <FaUserAltSlash/> : <FaUserAlt /> }
            </ButtonHoverItem>
          </div>
        </NavBarStyled>
        </>
  );

  };

export default NavBar;
