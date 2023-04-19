import React from 'react';
import axios from 'axios';
import { object } from 'prop-types';

import styled from 'styled-components';
import Popup from './Popup';
import { useState, useEffect } from 'react'
import { Cot2, TableHeader, TableRow, Container, Button } from './css/style'

import './css/style.css';

// const Cot2 = styled.div`
//     background-color: wheat;
//     padding-bottom: 15%;
// `;

const accessToken = sessionStorage.getItem('utoken');
let config = {

};
if (accessToken) {


  config = {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + accessToken.slice(1, -1) }
  };
}

function handleClick() {

}


function GetProduct() {
  const [products, setProducts] = useState([])
  const [statusBtn, setStatusBtn] = useState(false)

  useEffect(() => {
    axios.post('http://localhost:8081/api/admin/product-detail', config)
      .then(response => {
        setProducts(response.data.data);
        console.log("response");
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  return (
    <div >
      <main>
        <Cot2>
          <div className='listProducts'>
            <Container>
              <ul class="responsive-table">
                <TableHeader>
                  <div class="col-md-1"></div>
                  <div class="col-md-1">Sản phẩm</div>
                  <div class="col-sm-1"></div>
                  <div class="col-md-1">
                    <div className='nhanhieu'>
                      Nhãn hiệu
                    </div>
                  </div>
                  {/* <div class="col-md-2">Kích thước</div> */}
                  <div class="col-md-1"></div>

                  <div class="col-md-2">Số lượng</div>
                  {/* <div class="col-sm-1"></div> */}
                  <div class="col-md-1">Giá tiền</div>
                  <div class="col-md-3"></div>
                </TableHeader>
                <div>
                  <h3>  </h3> {
                    products.map((product) => (
                      <ol key={product.id} >
                        <TableRow>
                          <div class="col-md-2" >{product.product.category.name}</div>
                          <div class="col-sm-1"></div>
                          <div class="col-md-2" >{product.product.supplier.name}</div>
                          <div class="col-md-1"></div>
                          <div class="col-md-1" >{product.countInStock}</div>
                          <div class="col-sm-1"></div>
                          <div class="col-md-1" >{product.price}</div>
                          <div class="col-sm-1"></div>
                          <div class="col-md-1" >
                            <Button onClick={() => setStatusBtn(true)}>Chi tiết</Button>
                          </div>
                          <div class="col-md-2"></div>
                        </TableRow>
                      </ol>
                    ))
                  }
                </div>

              </ul>
            </Container>

          </div>
        </Cot2>
      </main>

      <Popup trigger={statusBtn} setTrigger={setStatusBtn}>
        <p>Hello</p>
      </Popup>
      
    </div>
  );
}


// export default GetProduct;
export { GetProduct };