import React from 'react';
import {
    Switch,
    Route
  } from "react-router-dom";  
import Home from './pages/Home';
import Fullbody from './pages/Full_body';
import About from './pages/About';

function App() {
    return (
        <main>
            <Switch>
                <Route path="/about">
                    <About />
                </Route>

                <Route path="/fullbody">
                    <Fullbody />
                </Route>

                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    );
}

export default App;
