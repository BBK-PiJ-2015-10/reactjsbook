import {useState, useEffect, useDebugValue} from "react";
import "./App.css";


function AppUsingDebugValue() {
    const name = useName();
    return (
        <div>
            {name}
        </div>
    );
}

export default AppUsingDebugValue;

function useName() {

    const [name, setName] = useState('');
    useDebugValue('name is ${name}');

    useEffect(() => {
        setTimeout(() => {
            setName('My React App');
        }, 5000);
    });

    return name;

}