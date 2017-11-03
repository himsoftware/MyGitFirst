import { connect } from 'react-redux';
import * as contactAction from '../actions/contacts';
import { browserHistory } from 'react-router';
import ContactIndex from '../components/ContactIndex';

const mapStateToProps = state => {
	return {
		contacts: state.contacts
	}
}

const mapDispatchToProps = dispatch => {
	return {
		loadContacts: userId => {
			dispatch( contactAction.loadContacts( userId ) )
				.then( res => {
					dispatch( contactAction.loadContactsSuccess( res.payload.data.contacts ) ) 
				} )
				.catch( err => console.log( err))
		},
		addContact: contactDetails => {
			dispatch( contactAction.addContact( contactDetails ) )
				.then( () => { 
					dispatch( contactAction.addContactSuccess( 'Successfully added' ) );
					browserHistory.push('/home')
				} )
				.catch( err => dispatch( contactAction.addContactError( err ) ) );
		},
		updateContact: ( contactDetails, contactId ) => {
			dispatch( contactAction.updateContact( contactDetails, contactId ) )
				.then( () => {
					dispatch( contactAction.updateContactSuccess( '' ) );
					browserHistory.push(`/home/view/${contactId}`);
				})
				.catch( err => dispatch( contactAction.updateContactError( err ) ) )
		},
		deleteContact: contactId => {
			dispatch( contactAction.deleteContact( contactId ) )
				.then( ()=> {
					dispatch( contactAction.deleteContactSuccess() )
					browserHistory.push(`/home`)
				})
				.catch( err=> dispatch( contactAction.deleteContactError( err ) ) )
		},
		filterContact: filterKeyword => {
			dispatch( contactAction.filterContact( filterKeyword ) )
		}
	}
}

const ContactContainer = connect( mapStateToProps, mapDispatchToProps )( ContactIndex );

export default ContactContainer;