import React from 'react';
import axios from 'axios';


import './css/style.css';

const accessToken = sessionStorage.getItem('utoken');
let config = {
};
if (accessToken) {
    console.log('Bearer ' + accessToken.slice(1, -1));
    config = {
        headers: { Authorization: 'Bearer ' + accessToken.slice(1, -1) }
    };
}

class GetColor extends React.Component {
    state = {
        colors: null,
        status: false
    };
    componentDidMount() {
        axios.get('http://localhost:8081/api/admin/color', config)
            .then(response => this.setState(
                {
                    colors: response.data.data,
                    status: true,
                }
            ));
    }
    render() {
        let { colors, status } = this.state;
        if (!status) {
            return <div>
                Loading...
            </div>;
        }
        return (
            <div >
                <select>
                    {colors.map(color=> (
                        <option key={color.id} value={color.id}>{color.name}</option>
                    ))}
                </select>
            </div>
        );
    }
}

// export default Getstore;
export { GetColor };
