import axios from 'axios';
const contactAPI = 'http://localhost:4001/api';

axios.defaults.headers.common['x-access-token'] = localStorage.getItem( 'userToken' );

export function addContact( contactDetails ) {
	const request = axios.post( `${contactAPI}/contacts`, contactDetails);
	return {
		type: 'ADD_CONTACT',
		payload: request,
	}
}

export function addContactSuccess( message ) {
	return {
		type: 'ADD_CONTACT_SUCCESS',
		message
	}
}

export function addContactError( message ) {
	return {
		type: 'ADD_CONTACT_ERROR',
		message
	}
}

export function updateContact( contactDetails, contactId ) {
	const request = axios.patch( `${contactAPI}/contacts/${contactId}`, contactDetails);
	return {
		type: 'UPDATE_CONTACT',
		payload: request
	}
}

export function updateContactSuccess( message ) {
	return {
		type: 'UPDATE_CONTACT_SUCCESS',
		message
	}
}

export function updateContactError( message ) {
	return {
		type: 'UPDATE_CONTACT_ERROR',
		message
	}
}

export function deleteContact( contactId ) {
	const request = axios.delete( `${contactAPI}/contacts/${contactId}`);
	return {
		type: 'DELETE_CONTACT',
		payload: request
	}	
}

export function deleteContactSuccess( message ) {
	return {
		type: 'DELETE_CONTACT_SUCCESS',
		message
	}	
}

export function deleteContactError( message ) {
	return {
		type: 'DELETE_CONTACT_ERROR',
		message
	}	
}

export function loadContacts() {
	const request = axios.get( `${contactAPI}/contacts` );
	return {
		type: 'LOAD_CONTACTS',
		payload: request
	}
}

export function loadContactsSuccess( contacts ) {
	return {
		type: 'LOAD_CONTACTS_SUCCESS',
		contacts
	}
}

export function filterContact( filterKeyword ) {
	return {
		type: 'FILTER_CONTACT',
		filterKeyword
	}
}