import { ReactNode, useState, createContext, useContext } from "react";

interface BlurContextProps {

    blur: string,
    setBlur: React.Dispatch<React.SetStateAction<string>>
}

export const BlurContext = createContext<BlurContextProps | null>(null);

interface ProviderProps {
    children: ReactNode
}

export function BlurProvider({children}:ProviderProps){

    const [blur, setBlur] = useState<string>("");

    return (
        <BlurContext.Provider value={{blur, setBlur}}>
            {children}
        </BlurContext.Provider>)
};

export const useBlurContext = () => {
    const blurContext = useContext(BlurContext);

    if(!blurContext){
        throw new Error("This hook needs to be in a BlurProvider")
    }

    return blurContext
}