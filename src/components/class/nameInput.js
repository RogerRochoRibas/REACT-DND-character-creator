import {useContext} from 'react';
import { ClassAppContext } from './classProvider';

const NameInput = () =>{
    const [state,setState] = useContext(ClassAppContext);

    return( <><h2>Name</h2>
    <input type="text" onChange={ (e) => {setState({ ...state, name:e.target.value})}} /></>
    );
}

export default NameInput;