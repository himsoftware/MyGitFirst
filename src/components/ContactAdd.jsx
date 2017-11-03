import React from 'react';
import { Icon } from 'react-fa';
import { Link } from 'react-router';

const styles = {
	minHeight100px: {
		minHeight: 100
	},
	clickableAvatar: {
		height: 195,
		cursor: 'pointer'
	},
	centered: {
		textAlign: 'center',
	},
	saveButton: {
		width: '49%',
		marginRight: '1%'
	},
	cancelButton: {
		width: '49%',
		marginRight: '1%',
		color: 'red'
	},
	padding: {
		padding: '0 15px 15px 15px',
	},
	hide: {
		display: 'none'
	} 
}

class ContactAdd extends React.Component{

	createContact(event){
		event.preventDefault();
		const contact = {
			name: this.name.value,
			tel: this.tel.value,
			email: this.email.value,
			organisation: this.organization.value,
			comment: this.comments.value
		}
		if (contact.name.length === 0 ) { alert("Name is required to save a contact"); return; }
		this.props.addContact(contact);
		if (this.props.isMobile ) {
			this.props.setContactAddDisplay(false);
			this.props.setContactBrowserDisplay(true);
		}

	}

	cancel(){
		this.props.setContactAddDisplay(false);
		this.props.setContactBrowserDisplay(true);
	}	

	render(){
		return(
			<div style={ styles.padding }>
				<h5>Add Contact</h5>

				<form ref={ (input) => this.contactForm = input } onSubmit={ (e) => this.createContact(e) } >
					<div className="row">
						<div className="four columns" style={ styles.centered } >
							<img 
								className="u-max-full-width" 
								src="/default_avatar.jpg" 
								alt="default avatar" 
								style={ styles.clickableAvatar } 
							/>
						</div>
						<div className="eight columns">
							<input 
								ref={ (input) => this.name = input } 
								className="u-full-width" 
								type="text" 
								placeholder="Name"
								required
							/>
							<input 
								ref={ (input) => this.tel = input } 
								className="u-full-width" 
								type="text" 
								placeholder="tel"
							/>
							<input 
								ref={ (input) => this.email = input } 
								className="u-full-width" 
								type="email" 
								placeholder="Email"
							/>
							<input 
								ref={ (input) => this.organization = input } 
								className="u-full-width" 
								type="text" 
								placeholder="Organization"
							/>
						</div>
						
					</div>

					<div className="row">
						<textarea 
							ref={ (input) => this.comments = input }
							className="u-full-width" 
							placeholder="comments" 
						>
						</textarea>
					</div>
					
					<div className="row">
						<button className="u-full-width" style={ styles.saveButton }>
							<Icon name="floppy-o" /> Save
						</button>
						<Link to={ '/home' } className="button" style={ styles.cancelButton }>
							<Icon name="trash-o" /> Cancel
						</Link>
					</div>				
				</form>
			</div>
			
		)
	}
}

export default ContactAdd;