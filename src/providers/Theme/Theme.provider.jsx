import React from 'react';



export const themes = {
    light: {
      backgroundPrincipalColor: "#ffa500"
    },
    dark: {
        backgroundPrincipalColor: "#7D725C"
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