import React from 'react';

import './css/style.css';
function FilterCategory() {
    return (
        <div>

            <div className="fcategory">
                <h4>Danh mục</h4>
                <a className='categoryName'>Túi thời trang nam</a>
                <a className='categoryName'>Túi đeo chéo nam</a>
                <a className='categoryName'>Ví nam</a>
                <a className='categoryName'>Ví nam ngang</a>
                <a className='categoryName'>Ví nam đứng</a>
            </div>
            <div className="fsupplier">
                <h4>Nhãn hiệu</h4>
                <a className='supplierName'>US ARMY</a>
                <a className='supplierName'>ANANSHOP688</a>
                <a className='supplierName'>4U</a>
                <a className='supplierName'>GREPACO</a>
                <a className='supplierName'>VinBuy</a>

            </div>

        </div>
    )
}
export { FilterCategory };