import React, {createContext, Dispatch, ReactNode, SetStateAction, useState} from 'react';

type TLoaderContext = {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>;
};

interface ILoaderProvider {
    children: ReactNode;
};

export const LoaderContext = createContext<TLoaderContext>({
    isLoading: false,
    setIsLoading: () => {},
});
export const LoaderProvider:React.FC <ILoaderProvider> = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{isLoading, setIsLoading}}>
            {children}
        </LoaderContext.Provider>
    );
};

