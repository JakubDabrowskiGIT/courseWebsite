import React, {useState, useEffect, useCallback} from 'react';
import axios from "axios";
import {useDropzone} from "react-dropzone";
import './Item.scss';
import {Card} from "react-bootstrap";

function Item() {

    const [items, setItems] = useState([]);

    const fetchItems = () => {
        axios.get("http://localhost:8080/backend").then(res => {
            console.log(res);
            setItems(res.data);
        });
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return items.map((items, index) => {
        return (
                <div key={index} className="cardStyle">
                    <Card>
                        {items.id ? <Card.Img variant="top" alt={'No img'} src={`http://localhost:8080/backend/${items.id}/image/download`}/> : null}
                        <Card.Body>
                            <Card.Title><p>{items.name}</p></Card.Title>
                            <Card.Text>
                                {items.description}
                                {items.price}
                                <Dropzone {...items}/>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </div>
        );
    });
};

function Dropzone({id}) {
    const onDrop = useCallback(acceptedFiles => {
        const file = acceptedFiles[0];
        console.log(file);

        const formData = new FormData();
        formData.append("file", file);

        axios.post(`http://localhost:8080/backend/${id}/image/upload`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(() => {
            console.log("file uploaded successfully");
        }).catch(err => {
            console.log(err);
        });

    }, [id]);
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <div {...getRootProps()}>
            <input {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop your item photo</p> :
                    <p>Drag od drop your item photo</p>
            }
        </div>
    )
}

export default Item;