import { connect } from 'react-redux';
import { signUp, signUpError, signUpSuccess, signUpResetErrorMessage } from '../actions/auth';

import SignUp from '../components/SignUp';

const mapStateToProps = state => {
	return {
		auth: state.auth
	}
}

const mapDispatchToProps = dispatch => {
	return {
		signUp: signUpDetails => {
			dispatch( signUp( signUpDetails ) )
				.then( response => response.payload.data.status )
				.then( status => { 
					console.log(status);
					if ( !status ) { 
						dispatch( signUpError( 'Email has been taken' ) )
					}
					dispatch( signUpSuccess( 'Successfully sign up, you may now proceed to sign in' ) )
				});
		},
		signUpErrorReset: () => {
			dispatch( signUpResetErrorMessage() );
		}
	}
}

const SignUpContainer = connect( mapStateToProps, mapDispatchToProps )( SignUp );

export default SignUpContainer;