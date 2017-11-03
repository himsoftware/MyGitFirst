import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import Footer from './Footer';

class BaseLayout extends React.Component{
	render(){
		return(
			<div>
				<HeaderContainer />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default BaseLayout;