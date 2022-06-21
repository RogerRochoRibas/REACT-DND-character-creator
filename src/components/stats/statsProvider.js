import {createContext,useState} from 'react';

const StatsProvider = ({ children }) =>{
    const [state,setState] = useState({});
    return (            
            <StatsAppContext.Provider value={[state,setState]}>
                {children}
            </StatsAppContext.Provider>  
    );
}

export default StatsProvider;
export const StatsAppContext = createContext();