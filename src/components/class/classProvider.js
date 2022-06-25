import {createContext,useState} from 'react';

const ClassProvider = ({ children }) =>{
    const [state,setState] = useState({});
    return (            
            <ClassAppContext.Provider value={[state,setState]}>
                {children}
            </ClassAppContext.Provider>  
    );
}

export default ClassProvider;
export const ClassAppContext = createContext();