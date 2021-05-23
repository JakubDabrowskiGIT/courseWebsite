import React from "react";
import Navbar from './components/Navbar';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import CourseGrid from "./components/CourseGrid";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <CourseGrid />
            </Router>
        </>
    );
}

export default App;
