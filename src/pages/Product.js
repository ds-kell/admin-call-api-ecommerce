import React from 'react';

import './css/style.css';

import { GetProduct } from '../components/Product/GetProduct';
import { FilterCategory } from '../Get/ProductFillter';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AddProduct } from '../components/Product/AddProduct';
const Button = styled.button`
  background-color: white;
  ${'' /* color: white; */}
  font-size: 15px;
  border-radius: 10px;
  width: 90px;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 25%;
`;
export { Button };
class Products extends React.Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-2">
            <div className='cot1'>
              <FilterCategory></FilterCategory>
            </div>
          </div>
          <div class="col-md-7">
            <GetProduct />
          </div>
          <div class="col-md-3" >
            <div className='cot3'>
              <div className='addproducttitle'>
                <div class='row'>
                  <AddProduct></AddProduct>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
