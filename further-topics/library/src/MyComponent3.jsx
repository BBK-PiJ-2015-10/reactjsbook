import {useState, useRef, useEffect} from "react";

function MyTimer() {
    const [time, setTime] = useState(0);
    const [reset, setReset] = useState(null);
    const intervalRef = useRef(null);

    useEffect(() => {
            console.log('use effect');
            setTime(0);
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
            return () => {
                console.log('performing clearing operation');
                clearInterval(intervalRef.current);
            };
        }
        , [reset]);

    return (
        <div>
            <div>{time}</div>
            <button onClick={() => setReset(Math.random())}>reset</button>
        </div>
    );
}

export default MyTimer;