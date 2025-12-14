import {useState, useEffect, useRef} from "react";

function MyComponent2() {

    const [show, setShow] = useState(true);

    useEffect(() => {
        setTimeout(() => setShow(false), 5000);
    });

    return show ? <Child/> : <div>HERE </div>;

}

export default MyComponent2;

function Child() {
    const intervalRef = useRef(null);
    const [time, setTime] = useState(0);

    useEffect(() => {
        console.log('Mount at time ' + time);

        intervalRef.current = setInterval(() => {
            setTime((prevTime) => prevTime + 1);
        }, 1000);

        return () => {
            console.log('Unmount at ' + time);
            clearInterval(intervalRef.current);
        };
    }, []);

    return <div>{time}</div>;

}