import React from 'react';
import axios from 'axios';
import { object } from 'prop-types';

import { Cot2, TableHeader, TableRow, Container, Button } from './css/style'


function handleCancel() {

}

function handleConfirm() {

}
class GetOrder extends React.Component {
  state = {
    orders: object,
    status: false
  };

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => this.setState(
        {
          Orders: response.data.data,
          status: true,
        }
      ));
  }

  render() {
    const { orders, status } = this.state;

    if (!status) {
      return <div>Loading...</div>;
    }

    return (
      <div >
        <div class="row">
          <Cot2>
              <div class='row'>
                <div className='addProduct'>
                </div>
              </div>
              <div className='listProducts'>
                <Container>
                  <ul class="responsive-table">
                    <TableHeader>
                      <div class="col-md-2">Sản phẩm</div>
                      <div class="col-md-2">Số lượng</div>
                      <div class="col-md-2">Tổng tiền</div>
                      <div class="col-md-2">Số điện thoại</div>
                      <div class="col-md-2">Địa chỉ</div>
                      <div class="col-md-2"></div>

                    </TableHeader>
                    <TableRow>
                      <div class="col-md-2" >42235</div>
                      <div class="col-md-2" >John Doe</div>
                      <div class="col-md-2" >$350</div>
                      <div class="col-md-2" >Pending</div>
                      <div class="col-md-2" >Hai Phong</div>
                      <div class="col-md-1" >
                        <Button onClick={handleConfirm}>Xác nhận</Button>
                      </div>
                      <div class="col-md-1" >
                        {/* <Button onClick={handleCancel}>Huỷ bỏ</Button> */}
                      </div>

                    </TableRow>
                    <TableRow>
                      <div class="col-md-2" >42235</div>
                      <div class="col-md-2" >John Doe</div>
                      <div class="col-md-2" >$350</div>
                      <div class="col-md-2" >Pending</div>
                      <div class="col-md-2" >Ha noi</div>
                      <div class="col-md-1" >
                        <Button onClick={handleConfirm}>Xác nhận</Button>
                      </div>
                      <div class="col-md-1" >
                        {/* <Button onClick={handleCancel}>Huỷ bỏ</Button> */}
                      </div>
                    </TableRow>
                  </ul>
                </Container>
              </div>
            </Cot2>
        </div>
      </div>
    );
  }
}

// export default GetOrder;
export { GetOrder };