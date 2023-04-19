import React from 'react';
import axios from 'axios';


import { Cot2, TableHeader, TableRow, Container, Button } from './css/style'

import './css/style.css';

const accessToken = sessionStorage.getItem('utoken');
let config = {
};
if (accessToken) {
  config = {
    headers: { Authorization: 'Bearer ' + accessToken.slice(1, -1) }
  };
}

class GetStore extends React.Component {
  state = {
    stores: null,
    status: false
  };



  componentDidMount() {
    axios.get('http://localhost:8081/api/admin/store-profile')
      .then(response => this.setState(
        {
          stores: response.data.data,
          status: true,
        }
      ));
  }
  render() {
    const { stores, status } = this.state;

    if (!status) {
      return <div>
        Loading...
      </div>;
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
              <h1>Thông tin cửa hàng</h1>
              {/* stores.map((store) => ( */}
              <ol>
                Tên cửa hàng: {stores.name},
                Số điện thoại: {stores.phoneNumber},
                Địa chỉ: {stores.address},
                Thời gian làm việc: {stores.workingHours}
              </ol>
              {/* )) */}
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

// export default Getstore;
export { GetStore };
