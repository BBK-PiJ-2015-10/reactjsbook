import React from 'react';
import './App.css';
import BooksList from "./BooksList";
import BooksProvider from "./BooksProvider";

const App: React.FC = () => {
    return (
        <BooksProvider>
            <BooksList/>
        </BooksProvider>
    )
    //return (
    //  <BooksList/>
    //)
    //let name: string = 'World';
    //name = 42;
    //return (
    //  <div className="App">
    //    <h1>Hello {name}</h1>
    //</div>
    //)
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
