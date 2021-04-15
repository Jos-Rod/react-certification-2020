import React, { useContext, useState } from 'react';
import './SearchBar.styles.css';
import styled from 'styled-components';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';


const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const { currentTheme, updateCurrentTheme } = useContext(ThemeContext);
    const { setSearchedValue } = useSiteInfo();

    const SearchButtonStyle = styled.button`
    {
        border-radius: 1px 15px 15px 1px; /* Adds curve to border corners */
        border: 0px;
        text-transform: uppercase; /* Make letters uppercase */
        padding: 14px 32px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: 500;
        color: black;
        background-color: rgb(255, 255, 224);
        /* box-shadow: 0 8px 10px 0 rgba(0, 0, 0 , .1); */
        transition-duration: 0.4s;
        outline: none;
    };
    &:hover {
      border-radius: 1px 15px 15px 1px; /* Adds curve to border corners */
      border: 0px;
      text-transform: uppercase; /* Make letters uppercase */
      padding: 14px 45px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 500;
      color: white;
      background-color: ${currentTheme.backgroundPrincipalColor};
      box-shadow: 0 20px 15px 0 rgba(0, 0, 0 , .1);
      outline: none;
  }
  `;

    function handlerClickSearch() {
        // console.log(`Value to search: ${searchValue}`);
        // props.searchValue(searchValue);
        setSearchedValue(searchValue);
    }

    function handleInputChange(e) {
        setSearchValue(e.target.value);
    }

    return (<>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input className="niceInput" value={searchValue} onChange={handleInputChange} placeholder="Search..." />
            <SearchButtonStyle onClick={handlerClickSearch}>
                Search
            </SearchButtonStyle>
      </div>
    </>)
};

export default SearchBar;