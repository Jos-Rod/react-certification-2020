import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SearchButtonStyle, SizeOfInput } from './SearchBar.styling';
import ThemeContext from '../../providers/Theme/Theme.provider';
import { useSiteInfo } from '../../providers/SiteInfoProvider/SiteInfo.provider';
import NiceInput from '../NiceInput/NiceInput.component';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  const { currentTheme } = useContext(ThemeContext);
  const { setSearchedValue, valueSearched } = useSiteInfo();

  function handlerClickSearch() {
    setSearchedValue(searchValue);
  }

  useEffect(() => {
    if (valueSearched === '') {
      setSearchValue('');
    }
  }, [valueSearched]);

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <SizeOfInput>
          <NiceInput
            value={searchValue}
            setValue={setSearchValue}
            placeholder="Search..."
          />
        </SizeOfInput>
        <Link to="/" onClick={handlerClickSearch}>
          <SearchButtonStyle theme={currentTheme}>Search</SearchButtonStyle>
        </Link>
      </div>
    </>
  );
};

export default SearchBar;
