import React, { useEffect, useState } from 'react';
import './SearchBar.styles.css';
import useYTubeRequest from '../../utils/hooks/useYTbe.js';

const SearchBar = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [currentSearch, setCurrentSearch] = useState("");
    const videosList = useYTubeRequest(currentSearch);

    useEffect(() => {
        console.log(videosList);
        // props.itemsFromSearch = videosList;
    }, [videosList]);

    function handlerClickSearch() {
        console.log(`Value to search: ${searchValue}`);
        setCurrentSearch(searchValue);
        props.itemsFromSearch(searchValue);
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