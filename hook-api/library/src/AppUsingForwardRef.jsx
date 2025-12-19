import {useState, useRef} from "react";
import Input from "./Input";
import './App.css';

function AppUsingForwardRef() {

    const ref = useRef(null);

    const [name, setName] = useState('');

    function handleClick() {
        setName(ref.current.value);
    }

    return (<div>
            <div>Hello {name}</div>
            <Input label="Name: " ref={ref}/>
            <button onClick={handleClick}>Say Hello</button>
        </div>);

}


export default AppUsingForwardRef;