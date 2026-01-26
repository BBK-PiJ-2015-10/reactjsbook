import React, {useState} from "react";
import './App.css';

const ControlledApp: React.FC = () => {

    const [name, setName] = useState('');

    console.log(`The name is ${name}`);

    return (
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
    )

};

export default ControlledApp;