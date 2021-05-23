import React from 'react';
import {CardGroup} from "react-bootstrap";
import Item from "./Item";

function CourseGrid() {
    return (
        <>
            <div className="App">
                <h1 className="pageTitle">Lista Kursów</h1>
                <div className="cardGroupStyle">
                    <CardGroup>
                        <Item/>
                    </CardGroup>
                </div>
            </div>
        </>
    );
}

export default CourseGrid;
