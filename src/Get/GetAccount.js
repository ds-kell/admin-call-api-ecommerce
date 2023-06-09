import React from 'react';
import axios from 'axios';
import { object } from 'prop-types';

import { Cot2, TableHeader, TableRow, Container, Button } from './css/style'


class GetAccount extends React.Component {
  state = {
    accounts: object,
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
    const { accounts, status } = this.state;

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
              <TableRow>
                <h4>Thông tin tài khoản</h4>
              </TableRow>
              <TableRow>
                <h4>
                  Danh sách tài khoản nhân viên
                </h4>
              </TableRow>
            </Cot2>
          </div>
          <div class="col-md-2" >
            <div className='cot4'>
              {/* cột 3 */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default GetOrder;
export { GetAccount };