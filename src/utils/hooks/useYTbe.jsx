import { useEffect, useState } from 'react';
import { API_KEY, BASE_URL_YT_SEARCH, BASE_URL_YT_VIDEOS } from '../constants';

function useYTubeRequest(searchText, searchType) {
  const [list, setList] = useState({});
  const [justSearched, setJustSearched] = useState(false);

  let searchTypeOnURL;
  if (searchType === 'SEARCH_VIDEOS') {
    searchTypeOnURL = `q=${searchText}`;
  } else if (searchType === 'SEARCH_RELATED') {
    searchTypeOnURL = `relatedToVideoId=${searchText}&type=video`;
  }

  const myHeaders = new Headers();
  const myInit = { method: 'GET', headers: myHeaders, mode: 'cors', cache: 'default' };
  const myrequest = new Request(
    `${BASE_URL_YT_SEARCH}?part=snippet&maxResults=15&${searchTypeOnURL}&key=${API_KEY}`,
    myInit
  );
  const myrequestForGettingVideoInfo = new Request(
    `${BASE_URL_YT_VIDEOS}?part=snippet&id=${searchText}&key=${API_KEY}`,
    myInit
  );

  useEffect(() => {
    setJustSearched(false);
    // if (searchType !== "GET_VIDEO_FROM_ID") {
      if (searchText != null) {
        fetch(searchType !== "GET_VIDEO_FROM_ID" ? myrequest : myrequestForGettingVideoInfo)
          .then((res) => res.json())
          .then((val) => {
            console.log("Resultado");
            console.log(val);
            setList(val);
            setJustSearched(true);
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        console.log('Do not search');
      }
  }, [searchText]);

  if (!justSearched || Object.keys(list).length === 0) {
    return { videos: [], channels: [] };
  }

  if (list.items) {
    if (list.pageInfo.totalResults === 1) return { videos: list.items, channels: [] };
    return {
      videos: list.items.filter((v) => v.id.kind.includes('video')),
      channels: list.items.filter((v) => v.id.kind.includes('channel')),
    };
  }

  return { videos: [], channels: [] };
}

export default useYTubeRequest;
