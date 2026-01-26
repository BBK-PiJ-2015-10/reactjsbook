import React, {useRef} from "react";
import './App.css';

const UncontrolledApp: React.FC = () => {
        const inputRef = useRef<HTMLInputElement>(null);

        function handleClick() {
            console.log(`Someone sent ${inputRef.current!.value}`)
        }

        return (
            <div>
                <input type="text" ref={inputRef}/>
                <button onClick={handleClick}>ok</button>
            </div>
        )
    }
;


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

export default UncontrolledApp;
