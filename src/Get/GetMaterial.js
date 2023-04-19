import React from 'react';
import axios from 'axios';


import { Cot2, TableHeader, TableRow, Container, Button } from './css/style'



class GetMaterial extends React.Component {
  state = {
    materials: [],
    status: false
  };

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => this.setState(
        {
          materials: response.data.data,
          status: true,
        }
      ));
  }

  render() {
    const { materials, status } = this.state;

    if (!status) {
      return <div>Loading...</div>;
    }
    return (
      <div >
        <div class="row">
          <div class="col-md-1">
            <div className='cot1'>
              {/* cột 1 */}
            </div>
          </div>
          <div class="col-md-10">
            <Cot2>
              <Container>
                <ul class="responsive-table">
                  <TableHeader>
                    <div class="col-md-2">  </div>
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
                      <Button>Xác nhận</Button>
                    </div>
                    <div class="col-md-1" >
                      <Button>Huỷ bỏ</Button>
                    </div>

                  </TableRow>
                  <TableRow>
                    <div class="col-md-2" >42235</div>
                    <div class="col-md-2" >John Doe</div>
                    <div class="col-md-2" >$350</div>
                    <div class="col-md-2" >Pending</div>
                    <div class="col-md-2" >Ha noi</div>
                    <div class="col-md-1" >
                      <Button>Xác nhận</Button>
                    </div>
                    <div class="col-md-1" >
                      <Button>Huỷ bỏ</Button>
                    </div>
                  </TableRow>

                </ul>
              </Container>

            </Cot2>
          </div>
          <div class="col-md-1" >
            <div className='cot3'>
              {/* cột 3 */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default Getmaterial;
export { GetMaterial };