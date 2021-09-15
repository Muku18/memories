import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Main2 from './Components/Main2'

import {BrowserRouter as Router} from "react-router-dom";

const App = () => {
    const [progress, setProgress] = useState(0);
    return (
        <>
            <Router>
                
                <Navbar />
                <Main />
                <Main2 setProgress={setProgress} />
            </Router>
        </>
    )
}

export default App
