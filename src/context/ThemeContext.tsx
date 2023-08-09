import {ReactNode, createContext, useContext, useEffect, useState} from 'react';



interface ThemeContextProps {
    theme: string;
    setTheme : React.Dispatch<React.SetStateAction<string>>
}



export const ThemeContext = createContext<ThemeContextProps | null>(null);

type ProviderProps = {
    children: ReactNode,
}


export const ThemeProvider = ({ children }: ProviderProps) => {

    const cachedTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null

    const previousTheme = window.matchMedia('(prefers-color-scheme:dark').matches ? 'night' : 'day';

    const [theme,setTheme] = useState<string>(cachedTheme || previousTheme);

    useEffect(()=>{
       console.log(window.matchMedia('(prefers-color-scheme:dark').matches) 
    },[])

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
