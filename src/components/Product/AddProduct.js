import React, { useState } from 'react';
import axios from 'axios';
import './css/style.css';
import { Button } from './css/style'
import { GetSupplier } from '../Supplier/GetSupplier';
import { GetColor } from '../Color/GetColor';
import { useParams } from 'react-router-dom';
import { GetMaterial } from '../Material/GetMaterial';
import { GetCategory } from '../Category/GetCategory';


const accessToken = sessionStorage.getItem('utoken');
let config = {};
if (accessToken) {
    config = {
        method: 'POST',
        headers: { Authorization: 'Bearer ' + accessToken.slice(1, -1) }
    };
}


class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            supplierId: '',
            materialId: '',
            categoryId: '',
            description: '',
            imageUrl: '',
            imageFilePath: ''
        };
        this.fileInput = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleSupplierChange = (supplierId) => {
        this.setState({
            supplierId: supplierId
        });
    };
    handleCategoryChange = (categoryId) => {
        this.setState({
            categoryId: categoryId
        });
    };


    handleMaterialChange = (materialId) => {
        this.setState({
          materialId: materialId
        });
      };
    handleSubmit(event) {
        event.preventDefault();
        const newProduct = {
            name: this.state.name,
            supplierId: this.state.supplierId,
            materialId: this.props.materialId,
            categoryId: this.props.categoryId,
            description: this.state.description,
            imageUrl: this.state.imageUrl,
            imageFilePath: this.fileInput.current.files[0].path
        };
        console.log(typeof (newProduct));
        console.log(newProduct);

        axios.post('http://localhost:8081/api/admin/product/add', newProduct, config)
            .then(response => {
                console.log(response)
                if (response.data.message === 'Created') {
                    alert('Thêm sản phẩm thành công!')
                }
            })
            .catch(error => {
                console.log(error)
            });

    }
    render() {
        return (
            <div class='container' >
                <div class='row'>
                    <center>
                        <h3>Thêm sản phẩm</h3>
                    </center>
                </div>
                <div className='addproduct'>
                    <form onSubmit={this.handleSubmit}>
                        <div class='row'>
                            <div class='col-md-4'>
                                <div className='tTitle'>
                                    Tên:
                                </div>
                                <div className='tTitle'>
                                    Danh mục:
                                </div>
                                <div className='tTitle'>
                                    Thương hiệu:
                                </div>
                                <div className='tTitle'>
                                    Chất liệu:
                                </div>
                                <div className='tTitle'>
                                    Mô tả:
                                </div>
                                <div className='tTitle'>
                                    Hình ảnh (link):
                                </div>
                                <div className='tTitle'>
                                    Hình ảnh (file):
                                </div>
                            </div>
                            <div class='col-md-3'>
                                <div className='productName'>
                                    <input type="text" name="productId" value={this.props.productId} onChange={this.handleChange} />
                                </div>
                                <div className='category'>
                                    <GetCategory onColorChange={this.handleCategoryChange} />
                                </div>
                                <div className='supplier'>
                                    <GetSupplier onColorChange={this.handleSupplierChange} />
                                </div>

                                <div className='material'>
                                    <GetMaterial onColorChange={this.handleMaterialChange} />
                                </div>

                                <div className='description'>
                                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                                </div>

                                <div className='imageLink'>
                                    <input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.handleChange} />
                                </div>
                                <div className='imagePath'>
                                    <input
                                        type="file" ref={this.fileInput}
                                        name="dateInput"
                                    // onChange={this.handleDateChange}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='addProductBtn'>
                            <Button type="submit" >Thêm</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export { AddProduct }