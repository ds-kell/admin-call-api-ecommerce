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

function GetSupplier(props) {
    const [suppliers, setSuppliers] = useState([]);
    const [supplierSelectedId, setSupplierSelectedId] = useState('');
    
    const handleSupplierChange = (event) => {
        const supplierId = event.target.value;
        setSupplierSelectedId(supplierId);
        props.onSupplierChange(supplierId);
      };

    useEffect(() => {
        axios.get('http://localhost:8081/api/admin/suppliers', config)
            .then(response => {
                setSuppliers(response.data.data);
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    return (
        <div >
            <select value={supplierSelectedId} onChange={handleSupplierChange}>
                {suppliers.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                ))}
            </select>
        </div>
    );
}

export { GetSupplier };
