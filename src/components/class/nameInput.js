import {useContext} from 'react';
import { AppContext } from "../../appProvider";

const NameInput = () =>{
    const [state,setState] = useContext(AppContext);

    return( <div id="nameInput"><h2>Name: </h2>
    <input type="text" onChange={ (e) => {setState({ ...state, name:e.target.value})}} spellCheck="false"/></div>
    );
}

export default NameInput;