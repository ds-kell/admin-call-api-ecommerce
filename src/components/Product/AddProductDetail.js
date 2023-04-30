import React from 'react';
import axios from 'axios';
import './css/style.css';
import { Button } from './css/style'
import { GetColor } from '../Color/GetColor';


const accessToken = sessionStorage.getItem('utoken');
let config = {};
if (accessToken) {
  config = {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + accessToken.slice(1, -1) }
  };
}

class AddProductDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      price: '',
      count: '',
      productId: '',
      discountId: '',
      colorId: '',
      sizeId: '',
      selectedDate: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleColorChange = this.handleColorChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }


  handleDateChange(event) {
    this.setState({ selectedDate: event.target.value });
  }

  handleColorChange = (colorId) => {
    this.setState({
      colorId: colorId
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    const newProductDetail = {
      price: this.state.price,
      count: this.state.count,
      productId: this.props.productId,
      discountId: 1,
      colorId: this.state.colorId,
      sizeId: this.state.sizeId
    };
    console.log(typeof (newProductDetail));
    console.log(newProductDetail);

    axios.post('http://localhost:8081/api/admin/product/add-detail', newProductDetail, config)
      .then(response => {
        console.log(response)
        if(response.data.message==='Created'){
          alert('Thêm sản phẩm thành công!')
        }
      })
      .catch(error => {
        console.log(error)
      });

  }

  render() {
    return (
      <div>
        <div class='row'>
          <div class='col-md-3'></div>
          <div class='col-md-6'><div class='container'>
            <div class='row' className='addTitle'>
              <h5>Thêm sản phẩm </h5>
            </div>
            <form onSubmit={this.handleSubmit}>
              <div class='row'>
                <div class='col-md-6'>
                  <div className='tTitle'>
                    Mã sản phẩm:
                  </div>
                  <div className='tTitle'>
                    Số lượng:
                  </div>
                  <div className='tTitle'>
                    Màu sắc
                  </div>
                  <div className='tTitle'>
                    Kích thước
                  </div>
                  <div className='tTitle'>
                    Giá tiền
                  </div>
                  <div className='tTitle'>
                    Giảm giá
                  </div>
                  <div className='tTitle'>
                    Ngày kết thúc
                  </div>
                </div>
                <div class='col-md-6'>
                  <div className='productId'>
                    <input type="text" name="productId" value={this.props.productId} onChange={this.handleChange} readOnly />
                  </div>
                  <div className='count'>
                    <input input type="text" name="count" value={this.state.count} onChange={this.handleChange} />
                  </div>

                  <div className='color'>
                    <GetColor onColorChange={this.handleColorChange} />
                  </div>

                  <div className='pSize'>
                    <input type="text" name="sizeId" value={this.state.sizeId} onChange={this.handleChange} />
                  </div>

                  <div className='price'>
                    <input type="text" name="price" value={this.state.price} onChange={this.handleChange} />
                  </div>

                  <div className='discount'>
                    <input type="text" name="discountId" value={this.state.discountId} onChange={this.handleChange} />
                  </div>
                  <div className='discountDate'>
                    <input
                      type="date"
                      name="dateInput"
                      value={this.state.selectedDate}
                      onChange={this.handleDateChange}
                    />
                  </div>
                </div>
              </div>
              <div className='addProductDetailBtn'>
                <Button type="submit" >Thêm</Button>
              </div>
            </form>
          </div></div>
          <div class='col-md-3'></div>
        </div>
      </div>
    );
  }
}

export { AddProductDetail }