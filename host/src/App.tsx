import React, {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// @ts-ignore
import RemoteApp from "remoteApp/RemoteApp";


function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <RemoteApp/>
        </div>
    )
}

export default App
