import {ReactNode, createContext, useContext, useState} from 'react';



interface ThemeContextProps {
    theme: "day" | "night";
    setTheme : React.Dispatch<React.SetStateAction<"day" | "night">>
}



export const ThemeContext = createContext<ThemeContextProps | null>(null);

type ProviderProps = {
    children: ReactNode,
}


export const ThemeProvider = ({ children }: ProviderProps) => {

    const [theme,setTheme] = useState<"day" | "night">('day');

    return <ThemeContext.Provider value={{theme,setTheme}}>{children}
                </ThemeContext.Provider>

};

export const useThemeContext = () => {
    const themeContext = useContext(ThemeContext);

    if(!themeContext){
        throw new Error("This hook needs to be used inside a ThemeProvider")
    }

    return themeContext
}