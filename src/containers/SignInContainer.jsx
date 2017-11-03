import { connect } from 'react-redux';
import { signIn, signInSuccess, signInError, signInResetErrorMessage } from '../actions/auth';
import { setCurrentUser } from '../actions/currentUser';
import { browserHistory } from 'react-router';

import SignIn from '../components/SignIn';

const mapStateToProps = state => {
	return {
		signInStatus: state.signIn
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signIn: credentials => {
			dispatch( signIn( credentials ) )
				.then( res => res.payload.data )
				.then( res => {
					if ( !res.status ) {
						dispatch( signInError( res.message ) )
					}
					dispatch( signInSuccess(res.token) )
					dispatch( setCurrentUser( res.token ) )
				})
				.then( () => browserHistory.push('/home') )
		},
		signInResetErrorMessage: () => {
			dispatch( signInResetErrorMessage() );
		}
	}
}

const SignInContainer = connect( mapStateToProps, mapDispatchToProps )( SignIn );

export default SignInContainer;