import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from './NavbarElements';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
const Navbar = () => {
	const navigate = useNavigate();
	const logout = () => {
		// localStorage.removeItem('token');
		// delete axios.defaults.headers.common['Authorization'];
		// navigate.push('/login');
		alert('Bạn chắc chắn muốn đăng xuất!');
		sessionStorage.clear('token');
		// localStorage.clear();
		window.location.href = '/';
	}
	return (
		<>
			<Nav>
				<Bars />
				<NavMenu>
					<NavLink to='/' activeStyle>
						<div>
							<h1
								style={{ 
									color: "aqua",
									
							 	}}
							>Anh</h1>
						</div>
					</NavLink>
					<NavLink to='/order' activeStyle>
						Đơn hàng
					</NavLink>
					<NavLink to='/product' activeStyle>
						Sản phẩm
					</NavLink>
					<NavLink to='/brand' activeStyle>
						Thương hiệu
					</NavLink>
					{/* <NavLink to='/category' activeStyle>
			Danh mục
		</NavLink> */}
					<NavLink to='/material' activeStyle>
						Chất liệu
					</NavLink>
					<NavLink to='/account' activeStyle>
						Tài khoản
					</NavLink>
					{/* <NavLink to='/sign-up' activeStyle>
			Sign Up
		</NavLink>
		 */}
					{/* Second Nav */}
					{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}

				</NavMenu>
				<NavBtn>
					<NavBtnLink onClick={logout}>
						Log out
					</NavBtnLink>
				</NavBtn>

			</Nav>
		</>
	);
};

export default Navbar;
