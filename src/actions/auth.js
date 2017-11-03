import axios from 'axios';

const authAPI = 'http://localhost:4000/api';

export function signOut( message ){
	localStorage.removeItem( 'userToken' );
	return {
		type: 'SIGN_OUT',
		message
	}
}

export function signIn( credentials ) {
	const request = axios.post( `${authAPI}/signin`, credentials )
	return {
		type: 'SIGN_IN',
		payload: request
	}
}

export function signInSuccess( token ) {
	axios.defaults.headers.common['x-access-token'] = token;
	localStorage.setItem( 'userToken', token );
	return {
		type: 'SIGN_IN_SUCCESS',
		token
	}
}

export function signInError( message ) {
	return {
		type: 'SIGN_IN_ERROR',
		message
	}
}

export function signInResetErrorMessage(){
	return {
		type: 'SIGN_IN_ERROR_RESET'
	}
}

export function signUp( signUpDetails ) {
	const request = axios.post( `${authAPI}/signup`, signUpDetails );
	return {
		type: 'SIGN_UP',
		payload: request
	}
}

export function signUpSuccess( message ) {
	return {
		type: 'SIGN_UP_SUCCESS',
		message
	}
}

export function signUpError( message ) {
	return {
		type: 'SIGN_UP_ERROR',
		payload: message
	}
}

export function signUpResetErrorMessage(){
	return {
		type: 'SIGN_UP_ERROR_RESET'
	}
}