import {useId} from 'react';
import './App.css';

function AppUseId() {
    const id = useId();
    return (<div>
        <label htmlFor={id}>Name: </label>
        <input type="text" id={id}/>
    </div>);
}

export default AppUseId;