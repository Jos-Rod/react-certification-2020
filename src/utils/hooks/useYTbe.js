import React, { useEffect, useState } from 'react';

function useYTubeRequest(searchText) {
    const [list, setList] = useState({});
    
    const search = "cbum";
    const API_KEY = "AIzaSyBSdS56YmAQSmNNMAUgkFMmgWYuPeKegcA";
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default' };
    var myrequest = new Request(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchText}&key=AIzaSyBSdS56YmAQSmNNMAUgkFMmgWYuPeKegcA`, myInit);
    
    useEffect(() => {
        fetch(myrequest).then((res) => res.json()).then((val) => {
            setList(val);
        })
    }, [searchText]);

    return list.items;
}

export default useYTubeRequest;