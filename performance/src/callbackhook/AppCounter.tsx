import React, {useState, useEffect} from "react";
//import Counter from "./Counter";
import CounterUsingCallBack from "./CounterUsingCallBack";


const AppCounter: React.FC = () => {

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
    return (
        <CounterUsingCallBack time={time}/>
    )
};

export default AppCounter;