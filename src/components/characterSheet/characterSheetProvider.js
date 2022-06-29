import {createContext,useState} from 'react';

const CharacterSheetProvider = ({ children }) =>{
    const [state,setState] = useState({});
    return (            
            <CharacterSheetAppContext.Provider value={[state,setState]}>
                {children}
            </CharacterSheetAppContext.Provider>  
    );
}

export default CharacterSheetProvider;
export const CharacterSheetAppContext = createContext();