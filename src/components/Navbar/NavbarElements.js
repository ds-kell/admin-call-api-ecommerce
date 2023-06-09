import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
// background: #FFFF66;
height: 60px;
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
/* Third Nav */
/* justify-content: flex-start; */
`;

// selection
export const NavLink = styled(Link)`
color: #808080;
display: flex;
align-items: center;
text-decoration: none;
font-size: 17px;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
}
`;
// responsive
export const Bars = styled(FaBars)`
display: none;
color: #808080;
background: #FFFF66;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
// logout
export const NavBtn = styled.nav`
display: flex;
align-items: center;
${'' /* margin-right: 24px; */}
/* Third Nav */
/* justify-content: flex-end;
width: 100vw; */
@media screen and (max-width: 768px) {
	display: none;
}
`;
// logout
export const NavBtnLink = styled(Link)`
border-radius: 4px;
text-decoration: underline;
padding: 8px 20px;
color: #000000;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff;
	color: #808080;
}
`;
export const ShopName = styled.h1`
	color: black;
	padding-top: 10%;
	text-align:center;
	padding-right: 40%;
	font-family: ans-serif;
    font-size: 50px;
    text-shadow: 3px 3px 3px #ababab;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		// color: blue;
`
