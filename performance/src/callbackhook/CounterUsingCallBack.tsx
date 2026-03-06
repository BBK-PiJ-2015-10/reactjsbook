import React, {useState, useCallback} from 'react';


type Props = {
    time: number;
}

const CounterUsingCallBack: React.FC<Props> = ({time}) => {

    const [count, setCount] = useState(0);

    // This is only regenerated when the [] changes, but since empty
    // it does not. Hence, only created once and reuse later on each
    // render as opposed to recreate on each render
    // could also use useMemo but returns value and not a function
    const handleClick = useCallback(() => {
        setCount((prevCount) => prevCount + 1)
    }, []);

    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={handleClick}>
                    increment
                </button>
            </div>
            <div>
                {time}
            </div>
        </div>
    )
};

export default CounterUsingCallBack;