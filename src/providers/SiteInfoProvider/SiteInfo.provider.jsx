import React, { useReducer, useContext } from 'react';
import mock from '../../components/mock/youtube-videos-mock.json';

const videoSelectedMock = mock.items[1];


const inicialState = {
    valueSearched: "",
    selectedVideo: videoSelectedMock,
    showingModalLogin: false,
    withMock: true
  }

const actions = {
    UPDATE_SEARCHED_VALUE: "UPDATE_SEARCHED_VALUE",
    UPDATE_RELATED_VIDEOS: "UPDATE_RELATED_VIDEOS",
    SELECT_VIDEO: "SELECT_VIDEO",
    SHOW_HIDE_MODAL_LOGIN: "SHOW_HIDE_MODAL_LOGIN"
}

function reducer(state, action) {
    switch (action.type) {
        case actions.UPDATE_SEARCHED_VALUE:
            return {...state, valueSearched: action.value}
        case actions.SELECT_VIDEO:
            return {...state, selectedVideo: action.value}
        case actions.SHOW_HIDE_MODAL_LOGIN:
            console.log(`On reducer: ${action.value}`);
            return {...state, showingModalLogin: !state.showingModalLogin }
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

function SiteInfoProvider({children}) {
    const [state, dispatch] = useReducer(reducer, inicialState);

    const value = {
        valueSearched: state.valueSearched,
        selectedVideo: state.selectedVideo,
        showingModalLogin: state.showingModalLogin,
        withMock: state.withMock,
        setSearchedValue: value => {
            dispatch({ type: actions.UPDATE_SEARCHED_VALUE, value });
        },
        setSelectedVideo: value => {
            dispatch({ type: actions.SELECT_VIDEO, value });
        },
        showOrHideModalLogin: value => {
            dispatch({ type: actions.SHOW_HIDE_MODAL_LOGIN, value });
        }
    };

    return <SiteContext.Provider value={value}>
        {children}
    </SiteContext.Provider>
}

export { useSiteInfo };
export default SiteInfoProvider;