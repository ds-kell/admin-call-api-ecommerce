import React, { useState } from 'react';

import './css/style.css';
import { Button } from './css/style'
import { GetSupplier } from '../Get/GetSupplier';
import { GetColor } from '../Get/GetColor';



function AddProduct() {
  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [price, setPrice] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, count, price);
  };
  const oneClick = (e) => {


  }

  function showMessage() {
    alert('Thêm sản phẩm thành công!');
  }

  return (
    <div class='container'>
      <div class='row'>
        <h4>Thêm mã SP mới</h4>
        <Button onClick={showMessage} >Thêm</Button>
      </div>
      <div class='row'>
        <h4>Thêm sản phẩm</h4>
        <Button onClick={showMessage} >Thêm</Button>
      </div>
    </div>
  );
}
export { AddProduct }