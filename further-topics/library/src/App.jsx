import './App.css';

//import BooksList from "./BooksList.container";
import withBooks from "./withBooks";
import BooksList from "./BooksList";
import BooksLoader from "./BooksLoader";

const BooksListWithBooks = withBooks(BooksList);

function App() {
    return (
        <div>
            <h1>Books management</h1>
            <BooksLoader>
                {(b, e) => <BooksList books={b} error={e}/>}
            </BooksLoader>
        </div>
        // <div>
        //     <h1>Books Management</h1>
        //     <BooksListWithBooks />
        // </div>
    );
    // <div>
    //     <h1>Books Management</h1>
    //       <BooksList />
    // </div>
    //    );
}

export default App;
