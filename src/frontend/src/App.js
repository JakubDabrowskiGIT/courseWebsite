import React from "react";
import Navbar from './components/Navbar';
import Item from "./components/Item";
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import {CardGroup} from "react-bootstrap";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <div className="App">
                    <h1 className="pageTitle">Lista Kursów</h1>
                    <div className="cardGroupStyle">
                        <CardGroup>
                            <Item/>
                        </CardGroup>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default App;
