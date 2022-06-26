import {createContext,useState} from 'react';

const RaceProvider = ({ children }) =>{
    const [state,setState] = useState({});
    return (            
            <RaceAppContext.Provider value={[state,setState]}>
                {children}
            </RaceAppContext.Provider>  
    );
}

export default RaceProvider;
export const RaceAppContext = createContext();