import React from 'react';
import axios from 'axios';


import { Cot2, TableHeader, TableRow, Container, Button} from './css/style'
import './css/style.css';
const accessToken = sessionStorage.getItem('utoken');
let config = {
};
if (accessToken) {
  config = {
    headers: { Authorization: 'Bearer ' + accessToken.slice(1, -1) }
  };
}

class GetBillOrder extends React.Component {
  state = {
    billOrders: null,
    status: false
  };

  componentDidMount() {
    axios.get('http://localhost:8081/api/admin/get-bill-order', config)
      .then(response => this.setState(
        {
          billOrders: response.data.data,
          status: true,
        }
      ));
  }
  render() {
    const { billOrders, status } = this.state;

    if (!status) {
      return <div>
        Loading...
      </div>;
    }

    return (
      <div >
        <div class="row">
          <Cot2>
            <div class='row'>
            </div>
            <div className='listBillOrders'>
              <Container>
                <ul class="responsive-table">
                  <TableHeader>
                    <div class="col-md-1">STT</div>
                    <div class="col-md-2">Trạng thái</div>
                    <div class="col-md-2">Thời gian</div>
                    <div class='col-md-1'></div>
                    <div class="col-md-2">Tổng thanh toán</div>
                    <div class="col-md-2">Người nhập</div>
                    <div class="col-md-2"></div>
                  </TableHeader>

                  {billOrders.map(bill => (
                    <div key={bill.id}>
                      <TableRow>
                        <div class="col-md-1" >{bill.id}</div>
                        <div class="col-md-2" >{bill.status}</div>
                        <div class="col-md-3" >{bill.paymentTime}</div>
                        <div class="col-md-2" >{bill.totalAmount}</div>
                        <div class="col-md-2" >Tuấn Vũ</div>
                        <div class="col-md-1" >
                          <Button>Chi tiết</Button>
                        </div>
                        <div class="col-md-1" >
                        </div>
                      </TableRow>
                    </div>
                  ))}

                </ul>
              </Container>
            </div>
          </Cot2>
        </div>
      </div>
    );
  }
}

export { GetBillOrder };
