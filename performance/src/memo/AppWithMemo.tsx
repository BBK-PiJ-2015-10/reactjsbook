import React, {useEffect, useState} from 'react';

type Props = {
    title: string;
}

const Headline: React.FC<Props> = ({title}) => {
    console.log('rendering headline')
    return (
        <h1>
            {title}
        </h1>
    )
}

const AppWithoutMemo: React.FC = () => {

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
        <Headline title={state.title}/>
    )
};

export default AppWithoutMemo;