import React from 'react';
import ContactSearch from './ContactSearch';
import ContactList from './ContactList';

import { Icon } from 'react-fa';
import { Link } from 'react-router';

const styles = {
	show: {
		display: 'block'
	},
	hide: {
		display: 'none'
	},
	padding15px: {
		padding: '0px 15px 0px 15px',
		fontFamily: 'fontAwesome'
	},
}

class ContactContainer extends React.Component{
	constructor() {
		super();
		this.state = {
			contactBrowserDisplay: true,
			isMobile: window.matchMedia('(min-width: 570px)').matches ? false : true 
		}
		this.listenWindowWidthChanges();
	}

	listenWindowWidthChanges(){
		const mediaQuery = window.matchMedia('(min-width: 570px)');
		mediaQuery.addListener( (mq) => {
			if ( mq.matches ) {
				this.setState( { contactBrowserDisplay: true, isMobile: false } );
			}
			if ( !mq.matches && !Object.keys(this.state.contactDetails).length ) {
				this.setState( { contactBrowserDisplay: true, isMobile: true } );
			}
			if ( !mq.matches && Object.keys(this.state.contactDetails).length ) {
				this.setState( { contactBrowserDisplay: false, isMobile: true } );
			}
			if ( !mq.matches && this.state.contactAddDisplay ) {
				this.setState( { contactBrowserDisplay: false } );
			}
		})
	}

	setContactBrowserDisplay( status ) {
		this.setState( { contactBrowserDisplay: status });
	}

	render(){
		return(
			<div className="row contact-container">
				{ this.props.contacts.refetch || !this.props.contacts.list.length ? this.props.loadContacts() : null }
				<div
					className="six columns"
					style={ this.state.contactBrowserDisplay ? styles.show : styles.hide } 
				>
					<h5 className="container-title">All Contacts</h5>
					<ContactSearch 
						filterContact={ (e) => this.props.filterContact(e) }
						isMobile={ this.state.isMobile }
						setContactAddDisplay={ (e) => this.setContactAddDisplay(e) }
						setContactBrowserDisplay={ (e) => this.setContactBrowserDisplay(e) }
						clearContactDetails={ (e) => this.clearContactDetails(e) }
					/>
					<div style={ styles.padding15px }>
						<Link to={ '/home/add' } className="button button-primary u-full-width">
							<Icon name="user-plus" />&ensp;
							Add New Contact
						</Link>
					</div>
					
					<ContactList
						contacts={ this.props.contacts } 
						contactFilter={ this.state.contactFilter }
						isMobile={ this.state.isMobile }
						setContactBrowserDisplay={ (e) => this.setContactBrowserDisplay(e) }
					 />
				</div>
				<div className="six columns" >
					{ 
						this.props.children ? React.cloneElement( this.props.children, { 
							contacts: this.props.contacts, 
							addContact: this.props.addContact,
							updateContact: this.props.updateContact,
							deleteContact: this.props.deleteContact
						}) : null 
					}
				</div>
			</div>
		)
	}
}

export default ContactContainer;