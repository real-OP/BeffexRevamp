import { createContext, useState } from 'react';
import { Appearance } from 'react-native';
import { colors } from '../constants/colors';

export const ThemeContext = createContext({});

export const ThemeProvider = ({children})=>{
    const [colorScheme , setColorScheme] = useState(Appearance.getColorScheme());
    const theme = colorScheme === 'dark' ? colors.dark : colors.light;
    return (
        <ThemeContext.Provider value={{theme , colorScheme, setColorScheme}}>
            {children}
        </ThemeContext.Provider>
    );

}