import React, {useState, useEffect} from "react";
import Counter from "./Counter";


const AppWithoutCallback: React.FC = () => {

    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(time + 1000);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
    return (
        <Counter time={time}/>
    )
};

export default AppWithoutCallback;