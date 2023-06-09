import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import './css/style.css';



const accessToken = sessionStorage.getItem('utoken');
let config = {};
if (accessToken) {
    console.log('Bearer ' + accessToken.slice(1, -1));
    config = {
        headers: { Authorization: 'Bearer ' + accessToken.slice(1, -1) }
    };
}

function GetColor(props) {
    const [color, setColor] = useState([]);
    const [colorSelectedId, setColorSelectedId] = useState(1);
    
    const handleColorChange = (event) => {
        const colorId = event.target.value;
        setColorSelectedId(colorId);
        props.onColorChange(colorId);
      };

    useEffect(() => {
        axios.get('http://localhost:8081/api/admin/color', config)
            .then(response => {
                setColor(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div >
            <select value={colorSelectedId} onChange={handleColorChange}>
                {color.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
            </select>
        </div>
    );
}

export { GetColor };
