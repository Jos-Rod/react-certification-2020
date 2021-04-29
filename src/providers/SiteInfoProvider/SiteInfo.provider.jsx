import React, { useReducer, useContext } from 'react';
import { VIDEO_FAVOURITES } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { getVideoId } from '../../utils/utils';

// FAVOURITES LOGIC START

function storageOnLS() {
  if (!storage.get(VIDEO_FAVOURITES)) {
    storage.set(VIDEO_FAVOURITES, []);
  }
  if (!Array.isArray(storage.get(VIDEO_FAVOURITES))) {
    storage.set(VIDEO_FAVOURITES, []);
  }
}

function getAllFavouriteVideos() {
  storageOnLS();
  return storage.get(VIDEO_FAVOURITES);
}

function saveFavouritesList(videoFavouritesList) {
  storage.set(VIDEO_FAVOURITES, videoFavouritesList);
}

function saveOrRemoveVideoFavouritesProvider(video) {
  storageOnLS();
  let vFavourites = storage.get(VIDEO_FAVOURITES);

  if (vFavourites.length === 0) {
    vFavourites = [video];
    saveFavouritesList(vFavourites);
  } else if (vFavourites.some((vf) => vf.id === video.id)) {
    // remove from list
    saveFavouritesList(vFavourites.filter((vf) => vf.id !== video.id));
  } else {
    // add to list
    vFavourites.push(video);
    saveFavouritesList(vFavourites);
  }
}

// FAVOURITES LOGIC END

const inicialState = {
  valueSearched: '',
  selectedVideo: {}, // videoSelectedMock para testing
  showingModalLogin: false,
  withMock: false,
  favouriteVideos: getAllFavouriteVideos(), // videosMock para testing
  selectedVideoFav: {}, // videoSelectedMock para testing
};

const actions = {
  UPDATE_SEARCHED_VALUE: 'UPDATE_SEARCHED_VALUE',
  UPDATE_RELATED_VIDEOS: 'UPDATE_RELATED_VIDEOS',
  SELECT_VIDEO: 'SELECT_VIDEO',
  SHOW_HIDE_MODAL_LOGIN: 'SHOW_HIDE_MODAL_LOGIN',
  UPDATE_FAVOURITES_LIST: 'UPDATE_FAVOURITES_LIST',
  SAVE_REMOVE_FAVOURITE_VIDEO: 'SAVE_REMOVE_FAVOURITE_VIDEO',
  SET_SELECTED_VIDEO_FAV: 'SET_SELECTED_VIDEO_FAV',
};

function reducer(state, action) {
  switch (action.type) {
    case actions.UPDATE_SEARCHED_VALUE:
      return { ...state, valueSearched: action.val };
    case actions.SELECT_VIDEO:
      return { ...state, selectedVideo: action.val };
    case actions.SHOW_HIDE_MODAL_LOGIN:
      return { ...state, showingModalLogin: !state.showingModalLogin };
    case actions.UPDATE_FAVOURITES_LIST:
      return { ...state, favouriteVideos: getAllFavouriteVideos() };
    case actions.SET_SELECTED_VIDEO_FAV:
      return { ...state, selectedVideoFav: action.val };
    default:
      break;
  }
}

const SiteContext = React.createContext();

function useSiteInfo() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error(`Can't use "useSiteInfo" without an SiteInfoProvider!`);
  }
  return context;
}

function SiteInfoProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, inicialState);

  const value = {
    valueSearched: state.valueSearched,
    selectedVideo: state.selectedVideo,
    showingModalLogin: state.showingModalLogin,
    withMock: state.withMock,
    favouriteVideos: state.favouriteVideos,
    selectedVideoFav: state.selectedVideoFav,
    setSearchedValue: (val) => {
      dispatch({ type: actions.UPDATE_SEARCHED_VALUE, val });
    },
    setSelectedVideo: (val) => {
      dispatch({ type: actions.SELECT_VIDEO, val });
    },
    showOrHideModalLogin: (val) => {
      dispatch({ type: actions.SHOW_HIDE_MODAL_LOGIN, val });
    },
    updateFavouritesList: (val) => {
      dispatch({ type: actions.UPDATE_FAVOURITES_LIST, val });
    },
    saveOrRemoveVideoFavourites: (val) => {
      saveOrRemoveVideoFavouritesProvider(val);
      dispatch({ type: actions.UPDATE_FAVOURITES_LIST, val });
    },
    setSelectedVideoFav: (val) => {
      dispatch({ type: actions.SET_SELECTED_VIDEO_FAV, val });
    },
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export { useSiteInfo };
export default SiteInfoProvider;
