import React from 'react';
import { browserHistory } from 'react-router';

const styles = {
	padding15px: {
		padding: '5px 15px 0px 15px',
		cursor: 'pointer'
	},
	contactName: {
		display: 'block',
		fontWeight: 'bold'
	},
	contactNumber: {
		display: 'block'
	},
	contactNameNumber: {
		paddingTop: 3,
		paddingLeft: 10,
		float: 'left',
		width: '73%'
	},
}



class Contact extends React.Component{

	displayDetails( contactId ) {
		browserHistory.push( `/home/view/${contactId}` )
	}

	render() {
		return(
			<div className="row" style={styles.padding15px} onClick={ () => this.displayDetails( this.props.contacts._id ) }>
				<div style={ styles.contactNameNumber }>
					<span style={ styles.contactName }>{this.props.contacts.name}</span>
					<span style={ styles.contactNumber }>{this.props.contacts.tel}</span>
				</div>
			</div>
		)
	}
}

export default Contact;