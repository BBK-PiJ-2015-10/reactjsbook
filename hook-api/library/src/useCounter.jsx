import {useState, useEffect} from "react";

function useCounter() {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setCounter((prevCounter) => prevCounter + 1),
            1000,
            []
        );
        return () => clearInterval(interval);
    }, []);

    return counter;

}

export default useCounter;