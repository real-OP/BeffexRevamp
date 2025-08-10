import { createContext } from 'react';
import { Appearance } from 'react-native';
import { colors } from '../constants/colors';

export const ThemeContext = createContext({});

export const ThemeProvider = ({children})=>{
    const theme = Appearance.getColorScheme() === 'dark' ? colors.dark : colors.light;
    return (
        <ThemeContext.Provider value={{theme}}>
            {children}
        </ThemeContext.Provider>
    );

}