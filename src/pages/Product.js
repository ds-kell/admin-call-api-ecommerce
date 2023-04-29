import React from 'react';

import './css/style.css';

import { GetProduct } from '../components/Product/GetProduct';

import { AddProduct } from '../Post/AddProduct';
import { FilterCategory } from '../Get/ProductFillter';

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
          <div class="col-md-8">
              <GetProduct/>
          </div>
          <div class="col-md-2" >
            <div className='cot3'>
              <div className='addproducttitle'>
                <AddProduct></AddProduct>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
