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

function GetType(props) {
    const [type, setType] = useState([]);
    const [typeSelectedId, setTypeSelectedId] = useState(1);
    
    const handleTypeChange = (event) => {
        const typeId = event.target.value;
        setTypeSelectedId(typeId);
        props.onTypeChange(typeId);
      };

    useEffect(() => {
        axios.get('http://localhost:8081/api/admin/size', config)
            .then(response => {
                setType(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div >
            <select value={typeSelectedId} onChange={handleTypeChange}>
                {type.map(t => (
                    <option key={t.id} value={t.id}>{t.name}</option>
                ))}
            </select>
        </div>
    );
}

export { GetType };
