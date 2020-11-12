import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import logo from './assets/react_logo.svg';

function Header(props) {
	return (
		<Navbar collapseOnSelect expand='sm'>
			<div className='container'>
				<a className='navbar-brand ' href='/react_portfolio_hosted'>
					Wilson Birch
				</a>
				<img src={logo} className='App-logo' alt='logo' />
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav className='navbar-nav ml-auto'>
						<Nav.Item>
							<Nav.Link eventKey='1' as={Link} to='/react_portfolio_hosted'>
								About
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey='2' as={Link} to='/portfolio'>
								Portfolio
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link eventKey='3' as={Link} to='/contact'>
								Contact
							</Nav.Link>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
}

export default Header;
