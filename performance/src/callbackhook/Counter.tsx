import React, {useState} from 'react';

type Props = {
    time: number;
}

const Counter: React.FC<Props> = ({time}) => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <div>{count}</div>
            <div>
                <button onClick={() => {
                    setCount(count + 1)
                }}>
                    increment
                </button>
            </div>
            <div>{time}</div>
        </div>
    )
};

export default Counter;