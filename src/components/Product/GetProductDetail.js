import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react'
import ShowProduct from './ShowProduct';


const accessToken = sessionStorage.getItem('utoken');
let config = {

};
if (accessToken) {
    config = {
        method: 'GET',
        headers: { Authorization: 'Bearer ' + accessToken.slice(1, -1) }
    };
}

function GetProductDetails(props) {
    const [productDetails, setProductDetails] = useState([]);
    const { productId } = props;

    useEffect(() => {
        axios.get(`http://localhost:8081/api/admin/get-product-detail?productId=${productId}`, config)
            .then(response => {
                setProductDetails(response.data.data);
                console.log(response.data);
            })
            .catch(error => console.log(error));
    }, [productId]);

    return (
        <div>
            <h5>Chi tiết các sản phẩm</h5>
            <div class='row'>
                <ul>
                    {productDetails.map(product => (
                        <li key={product.id}>
                            <h6>Sản phẩm {product.id}</h6>
                            <p>Số lượng trong kho: {product.countInStock}</p>
                            <p>Màu sắc: {product.color == null ? 'none' : product.color.name}</p>
                            <p>Kích thước: {product.size == null ? 'none' : product.size.name}</p>
                            <p>Giá tiền: {product.price}</p>
                            <p>Giảm giá: {product.discount == null ? 'none' : product.discount.value}</p>
                            <p>Ngày kết thúc giảm giá: {product.discount == null ? 'none' : product.discount.endDate}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export { GetProductDetails };