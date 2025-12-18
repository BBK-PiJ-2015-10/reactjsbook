import {useState, useEffect, useRef} from "react";
import './App.css';

function AppUsingRefHook() {
    const [showTimer, setShowTimer] = useState(true);
    useEffect(() => {
        setTimeout(() => setShowTimer(false), 5000);
    }, []);
    return <div>{showTimer && <Timer/>}</div>;
}

export default AppUsingRefHook;

function Timer() {
    const [time, setTime] = useState(0);
    const intervalRef = useRef(null);
    useEffect(() => {
        intervalRef.current = setInterval(
            () => setTime((prevTime) => prevTime + 1),
            1000
        );
        return () => clearInterval(intervalRef.current);
    });

    return <div>{time}</div>;
}