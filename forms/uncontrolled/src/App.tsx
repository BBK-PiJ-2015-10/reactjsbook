import React from "react";
import './App.css';
import LoginWithErrorHandling from "./LoginWithErrorHandling";

const App: React.FC = () => {
    return (
        <div>
            <LoginWithErrorHandling
                onLogin={(username, password) => console.log(`Login with username ${username} and password ${password}`)}/>
        </div>
    )
};

export default App;