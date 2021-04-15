import React from 'react';



export const themes = {
    light: {
      backgroundPrincipalColor: "#ffa500",
      hoverBackgroundColor: "#ffffe0",
      lightPrincipalColor: "#fcc765",
      lightestPrincipalColor: "#f7d79b"
    },
    dark: {
        backgroundPrincipalColor: "#7D725C",
        hoverBackgroundColor: "#e8e7e3",
        lightPrincipalColor: "#6b6965",
        lightestPrincipalColor: "#adaaa3"
    }
  };

const ThemeContext = React.createContext({currentTheme: themes.light, updateCurrentTheme: () => {}});

// function ThemeProviderYb({ children }) {

//     return (
//         <ThemeProvider.Provider value={themes.light}>
//             {children}
//         </ThemeProvider.Provider>
//     );
// }

export default ThemeContext;