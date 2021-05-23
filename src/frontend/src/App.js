import React from "react";
import Navbar from './components/Navbar';
import Item from "./components/Item";
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <div className="App">
                    <h1>Lista Kursów</h1>
                    <Item/>
                </div>
            </Router>
        </>
    );
}

export default App;
