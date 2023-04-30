
import { BrowserRouter as Router, Switch, Route, Routes, Redirect, useNavigate } from "react-router-dom";

import Account from './pages/Account';
import Brand from './pages/Brand';
import Category from './pages/Category';
import Order from './pages/Order';
import Material from './pages/Material';
// import Layout from './components/Navbar/Layout';

import Product from './pages/Product';
import Store from './pages/Store';

import Login from './components/Login/Login';

import useToken from './components/Login/useToken';

import Navbar from './components/Navbar/Navbar';
import { AddProductDetail } from './components/Product/AddProductDetail';


function App() {
	const { token, setToken } = useToken();

	if (!token) {
		return <Login setToken={setToken} />
	}
	return (
		<Router>
				<Navbar />
				<Routes>
					{/* <Route path="/login" element={<Login />} /> */}
					<Route path="/" element={<Store/>} />
					{/* <useNavigate from="/" to="/login" /> */}
					<Route path="order" element={<Order />} />
					<Route path="product" element={<Product />} />
					<Route path="product/add-product/:id" element={<AddProductDetail />} />
					<Route path="brand" element={<Brand />} />
					<Route path="material" element={<Material />} />
					<Route path="category" element={<Category />} />
					<Route path="account" element={<Account />} />
					<Route path="account_inf" element={<Account />} />
					{/* <Route path="logout" element={<LogoutButton />} /> */}
				</Routes>
		</Router>
	);
}

export default App;
