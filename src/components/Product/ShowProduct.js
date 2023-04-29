import React from 'react';
import './css/style.css';
import { Cot2, TableHeader, TableRow, Container, Button, CButton } from './css/style'
import './css/style.css';
import { useState, useEffect } from 'react'
import ReactModal from 'react-modal';
function ShowProduct(props) {
  const { products } = props;
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  // Logic for displaying products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div >
      <main>
        <Cot2>
          <div className='listProducts'>
            <Container>
              <ul class="responsive-table">
                <TableHeader>
                  <div class="col-md-2">Sản phẩm</div>
                  <div class="col-md-2">
                    <div className='nhanhieu'>
                      Nhãn hiệu
                    </div>
                  </div>

                  <div class="col-md-2">Chất liệu</div>
                  <div class="col-md-1">Giá tiền</div>
                  <div class="col-md-2"></div>
                </TableHeader>
                <div>
                  <div>
                    {/* Display current products */}
                    {currentProducts.map((product) => (
                      <div key={product.id} >
                        <TableRow>
                          <div class="col-md-2" >
                            <p>{showMore ? product.name : `${(product.name).slice(0, 30)}...`}</p>
                            {!showMore && (
                              <a style={{ color: '', textDecoration: 'underline' }} onClick={toggleShowMore}>Xem thêm</a>
                            )}
                            {showMore && (
                              <a style={{ color: '', textDecoration: 'underline' }} onClick={toggleShowMore}>Ẩn bớt</a>
                            )}
                          </div>
                          <div class="col-sm-1"></div>
                          <div class="col-md-2" >{product.supplier == null ? 'none' : product.supplier.name}</div>
                          <div class="col-md-1"></div>
                          <div class="col-md-1" >{product.material == null ? 'none' : product.material.name}</div>
                          <div class="col-sm-1"></div>
                          <div class="col-md-1" >{product.price}</div>
                          <div class="col-sm-1"></div>
                          <Button onClick={() => { handleItemClick(product) }}>Chi tiết</Button>
                        </TableRow>
                      </div>
                    ))}
                    <ReactModal isOpen={!!selectedItem} >
                      <h3> {selectedItem?.name}</h3>
                      <h4>{selectedItem?.price}</h4>

                      {selectedItem?.images
                        ? (
                          <ul>
                            {(selectedItem.images).map(image=> (
                              <li key={image.id}>
                                <div className='productImage'>
                                <img src={image.imageUrl}/>
                                </div>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>Danh sách trống</p>
                        )
                      }
                      <h5>{selectedItem?.supplier == null ? 'none' : selectedItem?.supplier.name}</h5>

                      <CButton className="close-button" onClick={handleCloseModal} >
                        Đóng
                      </CButton>
                    </ReactModal>
                    <ul className="page-number">
                      {pageNumbers.map(number => (
                        <li key={number}>
                          <a href="#" onClick={() => setCurrentPage(number)}>
                            {number}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ul>
            </Container>

          </div>
        </Cot2>
      </main>
    </div>
  );
}
export default ShowProduct;
