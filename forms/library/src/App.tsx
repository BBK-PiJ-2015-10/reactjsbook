import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'

const book = {
    id: 1,
    title: 'Java script - The comprehensive guide',
    author: 'Philip Ackermann',
    rating: 5
}

const App: React.FC = () => {
    return (
        <Form onSave={(book) => console.log(`Saving the book from ${book.author}`)}/>
    );

};

// function App() {
//
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
