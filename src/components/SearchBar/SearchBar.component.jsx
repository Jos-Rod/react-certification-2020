import React, { useContext, useEffect, useState } from 'react';
import './SearchBar.styling.js';
import styled from 'styled-components';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import NiceInput from '../NiceInput/NiceInput.component';
import { SearchButtonStyle, SizeOfInput } from './SearchBar.styling.js';
import { Link } from 'react-router-dom';


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");

    const { currentTheme } = useContext(ThemeContext);
    const { setSearchedValue, valueSearched } = useSiteInfo();

    function handlerClickSearch() {
        console.log("Wow");
        console.log(searchValue);
        setSearchedValue(searchValue);
    }

    useEffect(() => {
        if (valueSearched == "") {
            setSearchValue('');
        } 
    }, [valueSearched]);

    return (<>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <SizeOfInput>
                <NiceInput value={searchValue} setValue={setSearchValue} placeholder="Search..." />
            </SizeOfInput>
            <Link to="/" onClick={handlerClickSearch}>
                <SearchButtonStyle  theme={currentTheme}>
                    Search 
                </SearchButtonStyle>
            </Link>
      </div>
    </>)
};

export default SearchBar;