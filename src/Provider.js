import {createContext,useState} from 'react';

const Provider = ({ children }) =>{
    const [state,setState] = useState({});
    return (            
            <AppContext.Provider value={[state,setState]}>
                {children}
            </AppContext.Provider>  
    );
}

export default Provider;
export const AppContext = createContext();