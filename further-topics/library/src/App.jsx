import './App.css';

//import BooksList from "./BooksList.container";
import withBooks from "./withBooks";
import BooksList from "./BooksList";

const BooksListWithBooks = withBooks(BooksList);

function App() {
  return (
      <div>
          <h1>Books Management</h1>
          <BooksListWithBooks />
      </div>
  );
   // <div>
   //     <h1>Books Management</h1>
   //       <BooksList />
   // </div>
   //    );
}

export default App;
