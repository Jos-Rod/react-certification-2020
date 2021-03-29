import React, { useEffect, useState } from 'react';

function useYTubeRequest(searchText) {
    const [list, setList] = useState({});
    const [justSearched, setJustSearched] = useState(false);
    
    const search = "cbum";
    const API_KEY = "AIzaSyBSdS56YmAQSmNNMAUgkFMmgWYuPeKegcA";
    var myHeaders = new Headers();
    var myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default' };
    var myrequest = new Request(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${searchText}&key=${API_KEY}`, myInit);
    
    useEffect(() => {
        setJustSearched(false);
        fetch(myrequest).then((res) => res.json()).then((val) => {
            setList(val);
            setJustSearched(true);
        }).catch((e) => {
            console.log("Error while using youtube API");
            console.log(e);
        });
    }, [searchText]);
    console.log(list);
    if (!justSearched || Object.keys(list).length == 0) {
        return { videos: [], channels: [] };
    }
    // console.log(`Videos: ${list.items.filter(v => v.id.kind.includes("video")).length}`);
    // console.log(list.items.filter(v => v.id.kind.includes("channel")));
    // return list.items;
    return { videos: list.items.filter(v => v.id.kind.includes("video")), channels: list.items.filter(v => v.id.kind.includes("channel")) };
}

export default useYTubeRequest;