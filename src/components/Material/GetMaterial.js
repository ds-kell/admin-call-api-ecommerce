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

function GetMaterial(props) {
    const [material, setMaterial] = useState([]);
    const [materialSelectedId, setMaterialSelectedId] = useState(1);
    
    const handleMaterialChange = (event) => {
        const materialId = event.target.value;
        setMaterialSelectedId(materialId);
        props.onMaterialChange(materialId);
      };

    useEffect(() => {
        axios.get('http://localhost:8081/api/admin/material', config)
            .then(response => {
                setMaterial(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div >
            <select value={materialSelectedId} onChange={handleMaterialChange}>
                {material.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
            </select>
        </div>
    );
}

export { GetMaterial };
