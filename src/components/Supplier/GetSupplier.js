import React from 'react';
import axios from 'axios';


// import './css/style.css';
const accessToken = sessionStorage.getItem('utoken');
let config = {
};
if (accessToken) {
    config = {
        headers: { Authorization: 'Bearer ' + accessToken.slice(1, -1) }
    };
}

class GetSupplier extends React.Component {
    state = {
        suppliers: null,
        status: false
    };
    componentDidMount() {
        axios.post('http://localhost:8081/api/admin/suppliers', config)
            .then(response => this.setState(
                {
                    suppliers: response.data.data,
                    status: true,
                }
            ));
    }
    render() {
        let { suppliers, status } = this.state;
        if (!status) {
            return <div>
                Loading...
            </div>;
        }
        return (
            <div >
                <select>
                    {suppliers.map(supplier=> (
                        <option key={supplier.id} value={supplier.id}>{supplier.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}

// export default Getstore;
export { GetSupplier };
