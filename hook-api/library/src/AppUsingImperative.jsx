import {useState, useRef} from "react";
import InputUsingImperative from "./InputUsingImperative";
import './App.css';

function AppUsingImperative() {
    const ref = useRef(null);

    const [name, setName] = useState('');

    function handleClick() {
        setName(ref.current.getUCValue());
    }

    return (
        <div>
            <div>Hello {name} </div>
            <InputUsingImperative label="Name: " ref={ref}/>
            <button onClick={handleClick}>say hello</button>
        </div>
    );

}

export default AppUsingImperative;