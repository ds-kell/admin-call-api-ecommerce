import React from 'react';

import { GetOrder } from '../Get/GetOrder';
class Order extends React.Component {
  render() {
    return (
      <div>
        <div class='container'>
          <div class="row">
            <div class="col-md-1">
              <div className='cot1'>
                {/* cột 1 */}
              </div>
            </div>
            <div class='col-md-10'>
              <div class='row'>
                <div className='oTitle'>
                  <h3> Đơn hàng của khách</h3>
                </div>
                <GetOrder />
              </div>
              <div class='row'>
                <div className='oTitle'>
                  <h3> Đơn hàng của cửa hàng</h3>
                </div>
              </div>
            </div>
            <div class="col-md-1" >
              <div className='cot3'>
                {/* cột 3 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Order;
