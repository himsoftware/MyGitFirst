import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { signOut } from '../actions/auth';
import { resetCurrentUser } from '../actions/currentUser';
import Header from '../components/Header'

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signOut: () => {
			dispatch( signOut( 'Successfully signed out' ) )
			dispatch( resetCurrentUser() );
			browserHistory.push('/signin');
		}
	}
}

const HeaderContainer = connect( mapStateToProps, mapDispatchToProps )( Header );

export default HeaderContainer;