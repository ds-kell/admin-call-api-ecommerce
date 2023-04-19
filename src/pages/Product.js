import React from 'react';
import { Cot2, TableHeader, TableRow, Container, Button } from './css/style'

import './css/style.css';
import { GetProduct } from '../Get/GetProduct';
// import { GetProduct } from '../Get/GetProduct';
// import { GetProduct } from '../Get/GetProduct';



import { AddProduct } from '../Post/AddProduct';

class Products extends React.Component {
  render() {
    return (
      <div>
        <div class="row">
          <div class="col-md-0">
            <div className='cot1'>
              {/* {products.length} */}
            </div>
          </div>
          <div class="col-md-8">
            <GetProduct />
          </div>
          <div class="col-md-4" >
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
