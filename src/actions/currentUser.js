import decode from 'jwt-decode';

export function setCurrentUser( token ){
	return {
		type: 'SET_CURRENT_USER',
		user: decode( token )
	}
}

export function resetCurrentUser() {
	return {
		type: 'RESET_CURRENT_USER'
	}
}