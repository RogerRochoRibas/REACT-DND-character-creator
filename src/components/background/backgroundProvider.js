import {createContext,useState} from 'react';

const BackgroundProvider = ({ children }) =>{
    const [state,setState] = useState({});
    return (            
            <BackgroundAppContext.Provider value={[state,setState]}>
                {children}
            </BackgroundAppContext.Provider>  
    );
}

export default BackgroundProvider;
export const BackgroundAppContext = createContext();