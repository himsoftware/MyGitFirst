function contacts( state = {}, action ) {
	switch( action.type ) {
		case 'ADD_CONTACT_SUCCESS':
			return { ...state, refetch: true }
		case 'ADD_CONTACT_ERROR':
			return { ...state, refetch: false}
		case 'UPDATE_CONTACT_SUCCESS':
			return { ...state, refetch: true }
		case 'UPDATE_CONTACT_ERROR':
			return { ...state, refetch: false }
		case 'DELETE_CONTACT_SUCCESS':
			return { ...state, refetch: true }
		case 'DELETE_CONTACT_ERROR':
			return { ...state, refetch: false }
		case 'LOAD_CONTACTS_SUCCESS' :
			return { ...state, list: action.contacts, refetch: false };
		case 'FILTER_CONTACT':
			return { ...state, filter: action.filterKeyword }
		default:
			return state;
	}
}

export default contacts;