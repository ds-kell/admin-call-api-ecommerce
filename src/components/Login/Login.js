import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import styled from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.png'

import { useNavigate } from 'react-router-dom';

async function loginUser(credentials) {
  return fetch('http://localhost:8081/api/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({ setToken }) {
  // const navigate = useNavigate()
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    // navigate('/home')
  }
  const Button = styled.button`
    width: 20%;
    background-color: bisque;
    /* height: 150%;  */
    border-radius: 10px;
    margin-top:10px;
    margin-left: 16%;
    text-align: center;
    padding: 2px 0 2px 0;
    border-radius: 10px;

`;

  return (
    <div>

      <div class='row'>
        <div class="col-md-6">
          <div className='logo'>
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div class="col-md-6" >
          <div class='row'>
            <div className='top'>
              <br></br>
            </div>
          </div>
          <div class="row">
            <div class="col-md-1">
              <div className='cot1'>
                {/* cột 1 */}
              </div>
            </div>
            <div class="col-md-9">
              <div className='cot2'>
                <div class='row'>
                  <div class="shop_title">
                    <h1>VaAnh</h1>
                    <h3>I don't do fashion, I am Fashion</h3>
                    <p>________________***______________</p>
                  </div>
                </div>

                <div class='row'>
                  <div className='login_block'>
                    <form onSubmit={handleSubmit}>
                      <div className='input_block'>
                        <label>
                          <input className='input' type="text" onChange={e => setUserName(e.target.value)} placeholder='Username' />
                        </label><br></br>
                        <label>
                          <input className='input' type="password" onChange={e => setPassword(e.target.value)} placeholder='Password' />
                        </label>
                      </div>
                      <div className='submitBtn'>
                        <Button type="submit">Đăng nhập</Button>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
            <div class="col-md-2" >
              <div className='cot3'>
                {/* cột 2 */}
              </div>
            </div>
          </div>
          <div class='row'>
            <div className='bot'>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};