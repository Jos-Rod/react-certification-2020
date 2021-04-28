import React, { useReducer, useContext } from 'react';
import mock from '../../components/mock/youtube-videos-mock.json';
import { VIDEO_FAVOURITES } from '../../utils/constants';
import { storage } from '../../utils/storage';
import { getVideoId } from '../../utils/utils';

const videoSelectedMock = mock.items[1];
const channelMock = mock.items[0];
const videosMock = [mock.items[1], mock.items[2], mock.items[3], mock.items[4]];


const inicialState = {
    valueSearched: "",
    selectedVideo: {}, // videoSelectedMock para testing
    showingModalLogin: false,
    withMock: false,
    favouriteVideos: getAllFavouriteVideos(), // videosMock para testing
    selectedVideoFav: {}, // videoSelectedMock para testing
}

const actions = {
    UPDATE_SEARCHED_VALUE: "UPDATE_SEARCHED_VALUE",
    UPDATE_RELATED_VIDEOS: "UPDATE_RELATED_VIDEOS",
    SELECT_VIDEO: "SELECT_VIDEO",
    SHOW_HIDE_MODAL_LOGIN: "SHOW_HIDE_MODAL_LOGIN",
    UPDATE_FAVOURITES_LIST: "UPDATE_FAVOURITES_LIST",
    SAVE_REMOVE_FAVOURITE_VIDEO: "SAVE_REMOVE_FAVOURITE_VIDEO",
    SET_SELECTED_VIDEO_FAV: "SET_SELECTED_VIDEO_FAV",
}

function reducer(state, action) {
    switch (action.type) {
        case actions.UPDATE_SEARCHED_VALUE:
            return {...state, valueSearched: action.value}
        case actions.SELECT_VIDEO:
            return {...state, selectedVideo: action.value}
        case actions.SHOW_HIDE_MODAL_LOGIN:
            return {...state, showingModalLogin: !state.showingModalLogin }
        case actions.UPDATE_FAVOURITES_LIST:
            return {...state, favouriteVideos: getAllFavouriteVideos() }
        case actions.SET_SELECTED_VIDEO_FAV:
            return {...state, selectedVideoFav: action.value }
        default:
        break;
    }
}

const SiteContext = React.createContext();

// FAVOURITES LOGIC START

function storageOnLS() {
    if (!storage.get(VIDEO_FAVOURITES)) {
        storage.set(VIDEO_FAVOURITES, []);
    }
    if (!Array.isArray(storage.get(VIDEO_FAVOURITES))) {
        storage.set(VIDEO_FAVOURITES, []);
    }
}

function saveFavouritesList(videoFavouritesList) {
    storage.set(VIDEO_FAVOURITES, videoFavouritesList);
}

function _saveOrRemoveVideoFavourites(video) {
    storageOnLS();
    let vFavourites = storage.get(VIDEO_FAVOURITES);

    if (vFavourites.length === 0) {
        vFavourites = [video];
        saveFavouritesList(vFavourites);
    } else if (vFavourites.some(vf => getVideoId(vf) == getVideoId(video))) {
        // remove from list
        saveFavouritesList(vFavourites.filter(vf => getVideoId(vf) != getVideoId(video)));
    } else {
        // add to list
        vFavourites.push(video)
        saveFavouritesList(vFavourites);
    }
}

function getAllFavouriteVideos() {
    storageOnLS();
    return storage.get(VIDEO_FAVOURITES);
}

// FAVOURITES LOGIC END

function useSiteInfo() {
    const context = useContext(SiteContext);
    if (!context) {
      throw new Error(`Can't use "useSiteInfo" without an SiteInfoProvider!`);
    }
    return context;
  }

function SiteInfoProvider({children}) {
    const [state, dispatch] = useReducer(reducer, inicialState);

    const value = {
        valueSearched: state.valueSearched,
        selectedVideo: state.selectedVideo,
        showingModalLogin: state.showingModalLogin,
        withMock: state.withMock,
        favouriteVideos: state.favouriteVideos,
        selectedVideoFav: state.selectedVideoFav,
        setSearchedValue: value => {
            dispatch({ type: actions.UPDATE_SEARCHED_VALUE, value });
        },
        setSelectedVideo: value => {
            dispatch({ type: actions.SELECT_VIDEO, value });
        },
        showOrHideModalLogin: value => {
            dispatch({ type: actions.SHOW_HIDE_MODAL_LOGIN, value });
        },
        updateFavouritesList: value => {
            dispatch({ type: actions.UPDATE_FAVOURITES_LIST, value });
        },
        saveOrRemoveVideoFavourites: value => {
            _saveOrRemoveVideoFavourites(value);
            dispatch({ type: actions.UPDATE_FAVOURITES_LIST, value });
        },
        setSelectedVideoFav: value => {
            dispatch({ type: actions.SET_SELECTED_VIDEO_FAV, value });
        },
    };

    return <SiteContext.Provider value={value}>
        {children}
    </SiteContext.Provider>
}

export { useSiteInfo };
export default SiteInfoProvider;