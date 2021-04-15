import React, { useEffect, useState } from 'react';
import { API_KEY, BASE_URL_YT_SEARCH } from '../constants';

function useYTubeRequest(searchText, searchType) {
    const [list, setList] = useState({});
    const [justSearched, setJustSearched] = useState(false);

    let searchTypeOnURL;
    if (searchType == "SEARCH_VIDEOS") {
        searchTypeOnURL = `q=${searchText}`;
    } else if (searchType == "SEARCH_RELATED") {
        searchTypeOnURL = `relatedToVideoId=${searchText}&type=video`
    }

    var myHeaders = new Headers();
    var myInit = { method: 'GET',
                 headers: myHeaders,
                 mode: 'cors',
                 cache: 'default' };
    var myrequest = new Request(`${BASE_URL_YT_SEARCH}?part=snippet&maxResults=15&${searchTypeOnURL}&key=${API_KEY}`, myInit);
    
    useEffect(() => {
        setJustSearched(false);
        if (searchText != null) {
            fetch(myrequest).then((res) => res.json()).then((val) => {
                setList(val);
                console.log(`Results of search with: ${searchType}, search: ${searchText}`);
                console.log(val);
                setJustSearched(true);
            }).catch((e) => {
                console.log("Error while using youtube API");
                console.log(e);
            });
        } else {
            console.log("Do not search");
        }
        
    }, [searchText]);

    if (!justSearched || Object.keys(list).length == 0) {
        return { videos: [], channels: [] };
    }

    if (list.items) {
        return { videos: list.items.filter(v => v.id.kind.includes("video")), channels: list.items.filter(v => v.id.kind.includes("channel")) };
    }

    return { videos: [], channels: [] };
    
}

export default useYTubeRequest;