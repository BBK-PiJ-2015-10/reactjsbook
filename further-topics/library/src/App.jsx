import './App.css';

//import BooksList from "./BooksList.container";
//import withBooks from "./withBooks";
//import BooksList from "./BooksList";
//import BooksLoader from "./BooksLoader";
import {useState} from "react";
import Context from "./Context";
import Counter from "./Counter";

//const BooksListWithBooks = withBooks(BooksList);

function App() {

    const [counter, setCounter] = useState(0);

    function increment() {
        setCounter((prevState) => prevState + 1);
    }

    return (
        <Context.Provider value={counter}>
            <Counter/>
            <button onClick={increment}>increment</button>
        </Context.Provider>
    );


    //return (
    // <div>
    //     <h1>Books management</h1>
    //     <BooksLoader>
    //         {(b, e) => <BooksList books={b} error={e}/>}
    //     </BooksLoader>
    // </div>
    // <div>
    //     <h1>Books Management</h1>
    //     <BooksListWithBooks />
    // </div>
    //);
    // <div>
    //     <h1>Books Management</h1>
    //       <BooksList />
    // </div>
    //    );
}

export default App;
