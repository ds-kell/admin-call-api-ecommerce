import React from 'react';
import axios from 'axios';
import { object } from 'prop-types';


import { Cot2, TableHeader, TableRow, Container, Button } from './css/style'

class GetBrand extends React.Component {
  state = {
    brands: object,
    status: false
  };

  componentDidMount() {
    axios.get('https://reqres.in/api/users?page=2')
      .then(response => this.setState(
        {
          Brands: response.data.data,
          status: true,
        }
      ));
  }

  render() {
    const { brands, status } = this.state;

    if (!status) {
      return <div>Loading...</div>;
    }

    return (
      <div >
        <div class="row">
          <div class="col-md-2">
            <div className='cot1'>
              {/* cột 1 */}
            </div>
          </div>
          <div class="col-md-8">
          <Cot2>
          <Container>
                    <ul class="responsive-table">
                      <TableHeader>
                        <div class="col-md-1"></div>
                        <div class="col-md-2">Tên</div>
                        <div class="col-md-2">Số điện thoại</div>
                        <div class="col-md-2">Địa chỉ</div>
                        <div class="col-md-2">Email</div>
                        {/* <div class="col-md-2">Địa chỉ</div> */}
                        <div class="col-md-3"></div>

                      </TableHeader>
                      <TableRow>
                        <div class="col-md-1"></div>
                        <div class="col-md-2" >John Doe</div>
                        <div class="col-md-2" >42235</div>
                        <div class="col-md-2" >Pending</div>
                        <div class="col-md-2" >Hai Phong</div>
                        <div class="col-md-1" >                        
                          <Button>Chi tiết</Button>
                        </div>
                      </TableRow>
                      
                    </ul>
                  </Container>

          </Cot2>
          </div>
          <div class="col-md-2" >
            <div className='cot3'>
              {/* cột 3 */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default GetBrand;
export { GetBrand };