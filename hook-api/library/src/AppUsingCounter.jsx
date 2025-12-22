import useCounter from "./useCounter";

function AppUsingCounter() {

    const counter = useCounter();

    return (
        <div>
            {counter}
        </div>
    );

}

export default AppUsingCounter;