import React from "react";
import Navbar from './components/Navbar';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom';
import CourseGrid from "./components/CourseGrid";
import Contact from "./components/Contact";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <CourseGrid/>
                <Contact/>
            </Router>
        </>
    );
}

export default App;
