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

function GetCategory(props) {
    const [categories, setCategories] = useState([]);
    const [categorySelectedId, setCategorySelectedId] = useState(1);
    
    const handleCategoryChange = (event) => {
        const categoryId = event.target.value;
        setCategorySelectedId(categoryId);
        props.onCategoryChange(categoryId);
      };

    useEffect(() => {
        axios.get('http://localhost:8081/api/categories', config)
            .then(response => {
                setCategories(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div >
            <select value={categorySelectedId} onChange={handleCategoryChange}>
                {categories.map(c => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                ))}
            </select>
        </div>
    );
}

export { GetCategory };
