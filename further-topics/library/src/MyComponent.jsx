import {useState, useEffect} from "react";

function MyComponent() {
    const [state1, setState1] = useState(100);
    const [state2, setState2] = useState(200);

    useEffect(() => {
        setTimeout(() => setState1(1000), 5000);
        setTimeout(() => setState2(2000), 10000);
    }, []);

    useEffect(() => {
        console.log('State1 changed: ' + state1 + ' state2 ' + state2);
    }, [state1]);

    useEffect(() => {
        console.log('State2 changed: ' + state2 + ' state1 ' + state1);
    }, [state2]);

    return <div>My component works</div>;

}

export default MyComponent;