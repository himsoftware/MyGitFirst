import React from 'react';
import { Icon } from 'react-fa';
import { Link } from 'react-router';

const styles = {
	editButton: {
		paddingLeft: '3%',
		paddingRight: '3%',
		width: '50%'
	},
	deleteButton: {
		paddingLeft: '3%',
		paddingRight: '3%',
		width: '50%',
		color: 'red'
	},
	minHeight240px: {
		minHeight: 240
	},
	show: {
		padding: '0 15px 15px 15px',
		backgroundColor: 'white',
		minHeight: 380,
		zIndex: 2
	},
	showChild:{
		display: 'block'
	},
	hide: {
		display: 'none'
	},
	selectable: {
		cursor: 'pointer',
		color: '#1EAEDB'
	}
}

class ContactDetails extends React.Component{

	clickHandler(){
		this.props.deleteContact( this.props.routeParams.id );
	}

	render(){
		
		let activeContact = { name: ''};

		if ( this.props.contacts.hasOwnProperty('list') ) {
			activeContact = this.props.contacts.list.find( ( contact ) => { return contact._id === this.props.routeParams.id } );
		}

		return(
			<div>
				<div className="row">
					<h5>
						<Link to={ '/home'} ><Icon name="mail-reply"/></Link>
						&ensp;{ activeContact === undefined ? null : activeContact.name }
					</h5>	
				</div>
				
				<div className="row" style={ styles.minHeight240px }>
					<div className="eight columns">
						<div className="row">
							<div className="six columns">
								<label>Phone</label>
								<p>{ activeContact === undefined ? null : activeContact.tel }</p>
							</div>
							<div className="six columns">
								<label>Email</label>
								<a href="mailto:wotzhs@gmail.com" target="_top">{ activeContact === undefined ? null : activeContact.email }</a>
							</div>
						</div>
						
						<label>Organization</label>
						<p>{ activeContact === undefined ? null : activeContact.organisation }</p>
						<label>Comment</label>
						<p>{ activeContact === undefined ? null : activeContact.comment }</p>
					</div>
				</div>

				<br/>

				<div className="row">
					<Link 
						to={ `/home/edit/${this.props.routeParams.id}` }
						className="button" 
						style={ styles.editButton }
					>
						<Icon name="pencil"/> Edit
					</Link>
					<button className="button" style={ styles.deleteButton } onClick={ () => this.clickHandler() }><Icon name="trash"/> Delete</button>
				</div>
			</div>
		)
	}
}

export default ContactDetails;