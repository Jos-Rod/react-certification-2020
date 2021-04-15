import React, { useReducer, useContext } from 'react';


const inicialState = {
    valueSearched: "",
    selectedVideo: null
  }

const actions = {
UPDATE_SEARCHED_VALUE: "UPDATE_SEARCHED_VALUE",
UPDATE_RELATED_VIDEOS: "UPDATE_RELATED_VIDEOS",
SELECT_VIDEO: "SELECT_VIDEO"
}

function reducer(state, action) {
    switch (action.type) {
        case actions.UPDATE_SEARCHED_VALUE:
            console.log("Action on reducer");
            console.log(action);
            return {...state, valueSearched: action.value}
        break;
        case actions.UPDATE_RELATED_VIDEOS:
            // setValSearchRelated(action.valueToSearch);
        break;
        case actions.SELECT_VIDEO:
            // setCurrentVideo(action.video);
        break;
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
        setSearchedValue: value => {
            dispatch({ type: actions.UPDATE_SEARCHED_VALUE, value });
        }
    };

    return <SiteContext.Provider value={value}>
        {children}
    </SiteContext.Provider>
}

export { useSiteInfo };
export default SiteInfoProvider;