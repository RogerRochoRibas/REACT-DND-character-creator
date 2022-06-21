import {useContext} from 'react';
import {AppContext} from './Provider';

const Login = () =>{
    const [state,setState] = useContext(AppContext);

    return( <input type="text" onChange={ (e) => {setState({ ...state, name:e.target.value})}} />
    );
}

export default Login;