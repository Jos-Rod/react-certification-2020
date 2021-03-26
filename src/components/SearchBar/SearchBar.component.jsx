import React, { useEffect, useState } from 'react';
import './SearchBar.styles.css';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");

    function handlerClickSearch() {
        console.log(`Value to search: ${searchValue}`);
        props.searchValue(searchValue);
    }

    function handleInputChange(e) {
        setSearchValue(e.target.value);
    }

    return (<>
        <div style={{ display: 'flex', alignItems: 'center' }}>
        <input className="niceInput" value={searchValue} onChange={handleInputChange} placeholder="Search..." />
        <button className="buttonSearch" onClick={handlerClickSearch}>Search</button>
      </div>
    </>)
};

export default SearchBar;