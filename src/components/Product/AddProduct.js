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
        <center>
          <h4>Thêm sản phẩm</h4>
        </center>
      </div>
      <form onSubmit={handleSubmit}>
        <div class='row'>

          <div class='col-md-4'>
            <div className='tTitle'>
              Tên sản phẩm:
            </div>
            <div className='tTitle'>
              Nhãn hiệu
            </div>
            <div className='tTitle'>
              Màu sắc
            </div>
            <div className='tTitle'>
              Số lượng
            </div>
            <div className='tTitle'>
              Đơn giá
            </div>
            <div className='tTitle'>
              Hình ảnh
            </div>
          </div>
          <div class='col-md-8'>
            <div className='pName'>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='supplier'>
              <GetSupplier></GetSupplier>
            </div>
            <div className='color'>
              <GetColor></GetColor>
            </div>
            <div className='count'>
              <input type="text" value={count} onChange={(e) => setCount(e.target.count)} />
            </div>
            <div className='price'>
              <input type="text" value={price} onChange={(e) => setPrice(e.target.price)} />
            </div>
            <div className='addImage'>
                <input type="file" />
            </div>
          </div>
        </div>
        <Button  onClick={showMessage} >Thêm</Button>
      </form>
    </div>
  );
}
export { AddProduct }