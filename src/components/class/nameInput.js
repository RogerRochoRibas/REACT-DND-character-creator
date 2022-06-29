import {useContext} from 'react';
import { AppContext } from "../../appProvider";

const NameInput = () =>{
    const [state,setState] = useContext(AppContext);

    return( <><h2>Name</h2>
    <input type="text" onChange={ (e) => {setState({ ...state, name:e.target.value})}} /></>
    );
}

export default NameInput;