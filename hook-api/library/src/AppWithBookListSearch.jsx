import {useState, useDeferredValue, useMemo} from "react";
import BooksListWithSearch from "./BooksListWithSearch";
import "./App.css";

function AppWithBookListSearch() {
    console.log('this app is rendering');
    const [searchString, setSearchString] = useState('');

    const deferredSearchString = useDeferredValue(searchString, {
        timeoutMs: 1000
    });

    const list = useMemo(() => {
            console.log(`Using memo`);
            return <BooksListWithSearch searchString={deferredSearchString}/>;
        },
        [deferredSearchString]
    );

    return (
        <div>
            <div>
                Search: {' '}
                <input type="text" value={searchString} onChange={(event) => {
                    setSearchString(event.target.value);
                }}/>
                {list}
            </div>
        </div>
    );
}

export default AppWithBookListSearch;