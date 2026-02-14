import {useState, useEffect} from 'react';

function useLoadData<T>(url: string): T[] {

    const [state, setState] = useState<T[]>([]);

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setState(data));
    }, []);

    return state;
}

export default useLoadData;