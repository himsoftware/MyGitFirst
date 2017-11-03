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

class ContactEdit extends React.Component{

	handleSubmit(event) {
		event.preventDefault();
		const updateDetails = {
			name: this.name.value,
			tel: this.tel.value,
			email: this.email.value,
			organisation: this.organisation.value,
			comment: this.comment.value
		}
		this.props.updateContact( updateDetails, this.props.routeParams.id );

	}
	
	
	render(){

		let activeContact = { name: ''};

		if ( this.props.contacts.hasOwnProperty('list') ) {
			activeContact = this.props.contacts.list.find( ( contact ) => { return contact._id === this.props.routeParams.id } );
		}

		return(
			<form onSubmit={ (e) => this.handleSubmit(e) }>
				<h5>Edit Contact</h5>
				<div className="row">
					<div className="three columns">
						<label>Name</label>
					</div>
					<div className="nine columns">
						<input
							ref={ (input) => this.name = input }  
							type="text" 
							name="name"
							className="u-full-width" 
							defaultValue={ activeContact === undefined ? null : activeContact.name }
						/>
					</div>
				</div>

				<div className="row">
					<div className="three columns">
						<label>Phone</label>
					</div>
					<div className="nine columns">
						<input
							ref={ (input) => this.tel = input }  
							type="text" 
							name="tel"
							className="u-full-width" 
							defaultValue={ activeContact === undefined ? null : activeContact.tel }
						/>
					</div>
				</div>

				<div className="row">
					<div className="three columns">
						<label>Email</label>
					</div>
					<div className="nine columns">
						<input 
							ref={ (input) => this.email = input } 
							type="text" 
							name="email"
							className="u-full-width" 
							defaultValue={ activeContact === undefined ? null : activeContact.email }
						/>
					</div>
				</div>

				<div className="row">
					<div className="three columns">
						<label>Organization</label>
					</div>
					<div className="nine columns">
						<input 
							ref={ (input) => this.organisation = input } 
							type="text" 
							name="organisation"
							className="u-full-width" 
							defaultValue={ activeContact === undefined ? null : activeContact.organisation }
						/>
					</div>
				</div>

				<div className="row">
					<div className="three columns">
						<label>Comment</label>
					</div>
					<div className="nine columns">
						<input 
							ref={ (input) => this.comment = input } 
							type="text" 
							name="comment"
							className="u-full-width" 
							defaultValue={ activeContact === undefined ? null : activeContact.comment }
						/>
					</div>
				</div>
				
				<br/>

				<div className="row">
					<button className="button" style={ styles.editButton }>
						<Icon name="pencil"/> Save
					</button>
					<Link to={ `home/view/${this.props.routeParams.id}` } 
						className="button" style={ styles.deleteButton }>
						<Icon name="trash"/> Cancel
					</Link>
				</div>
			</form>
		)
	}
}

export default ContactEdit;