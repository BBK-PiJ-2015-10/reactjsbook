import React, {useEffect, useState, ReactElement, memo} from 'react';

type Props = {
    data: {
        number: number;
        title: string;
    }
}

function isEqual(prevProps: Props, nextProps: Props) {
    return prevProps.data.title == nextProps.data.title;
}

const Headline = memo(function ({data: {title}}: Props): ReactElement {
    console.log('rendering headline')
    return (
        <h1>
            {title}
        </h1>
    )
}, isEqual);

const AppWithMemoObject: React.FC = () => {

    const [state, setState] = useState({number: 0, title: 'Hello Memo'});

    useEffect(() => {
        setTimeout(() => {
            setState((prevState) => ({...prevState, number: 1}));
        }, 1000);
        setTimeout(() => {
                setState((prevState) => (
                    {
                        ...prevState,
                        number: 2,
                        title: 'Hello React'
                    }
                ));
            }
            , 2000);
    }, [])

    return (
        <Headline data={state}/>
    )
};

export default AppWithMemoObject;