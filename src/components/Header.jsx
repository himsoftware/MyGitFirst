import React from 'react';
import { Link } from 'react-router';

const styles = {
	header: {
		paddingTop: 25,
		paddingLeft: '2vw',
	},
	noUnderline: {
		textDecoration: 'none',
		position: 'fixed',
		left: 30
	},
	loginButton: {
		marginRight: '2vw',
		marginTop: 10,
		position: 'fixed',
		right: 30
	},
	logo: {
		fontSize: '2.2em'
	}
}

class Header extends React.Component{

	renderSignOut() {
		return <button className="button" style={ styles.loginButton } onClick={ () => this.props.signOut() }>Sign Out</button>;
	}

	renderSignIn() {
		return <Link to={'/signin'} className="button" style={ styles.loginButton } >Sign In</Link>;
	}

	render(){
		return(
			<div className="row header" style={ styles.header } >
				<span style={ styles.logo } >
					<Link to={ this.props.currentUser.email.length ? '/home' : '/' } style={ styles.noUnderline }>Disconeq</Link>
				</span>
				{ this.props.currentUser.email.length ? this.renderSignOut() : this.renderSignIn() }
			</div>
		)
	}
}

export default Header;