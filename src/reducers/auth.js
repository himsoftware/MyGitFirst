function auth( state ={}, action ) {
	switch( action.type ) {
		case 'SIGN_OUT':
			return { ...state, message: action.message }
		case 'SIGN_IN_SUCCESS':
			return state;
		case 'SIGN_IN_ERROR':
			return { ...state, message: action.message }
		case 'SIGN_IN_ERROR_RESET':
			return { ...state, message: '' }; 
		case 'SIGN_UP_SUCCESS':
			return { ...state, success: true, message: action.message }
		case 'SIGN_UP_ERROR':
			return { ...state, success: false, message: action.payload }
		case 'SIGN_UP_ERROR_RESET':
			return { ...state, success: true, message: '' }
		default:
			return state;
	}
}

export default auth;